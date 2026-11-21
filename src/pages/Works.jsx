import { useMemo, useState } from 'react'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { WorkModal } from '../components/WorkModal'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { works } from '../data/content'
import { trackViewProjectClick } from '../utils/analytics'

const categories = ['All', 'Healthcare', 'Retail', 'Education', 'Portfolio', 'Business']

export function Works() {
  const [filter, setFilter] = useState('All')
  const [activeWork, setActiveWork] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? works : works.filter((work) => work.category === filter)),
    [filter],
  )

  const worksSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'LaunchWeb Solutions Portfolio Projects',
    itemListElement: works.map((w, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: w.name,
        description: w.summary,
        url: w.url || 'https://launchwebsolutions.in/works',
        image: w.image,
      },
    })),
  }

  const handleOpenWork = (work) => {
    trackViewProjectClick(work.name)
    setActiveWork(work)
  }

  return (
    <>
      <SEO
        title="Our Works &amp; Portfolio | LaunchWeb Solutions"
        description="Explore live websites, healthcare portals (Sri Sai Clinic), retail shops, LMS platforms, and custom software created by LaunchWeb Solutions for clients in Vandavasi, Kanchipuram, Chennai & globally."
        keywords="LaunchWeb Solutions portfolio, Sri Sai Clinic website, Web development portfolio, React web apps, Custom software showcase, Web developer projects"
        canonicalUrl="https://launchwebsolutions.in/works"
        schemaJson={worksSchema}
      />

      <div className="pt-26 pb-16 sm:pt-32 sm:pb-24 bg-[#F8FAFC] text-slate-900 min-h-screen">
        <div className="container-page">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4338CA]">
              Portfolio &amp; Selected Works
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Production Projects &amp; Deployments
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              Explore production websites, healthcare portals, retail applications, and custom software delivered by LaunchWeb Solutions.
            </p>
          </div>

          {/* Category Filter Pills (Clean, solid, accessible) */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`min-h-[40px] px-4 py-2 rounded-lg text-xs font-bold transition-colors duration-150 cursor-pointer ${
                  filter === category
                    ? 'bg-[#4338CA] text-white shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((work) => (
              <button
                key={work.id}
                type="button"
                onClick={() => handleOpenWork(work)}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xs hover:border-slate-300 transition-colors duration-150 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={work.image}
                    alt={work.imageAlt || work.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-slate-900/85 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    {work.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {work.type}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {work.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
                    {work.summary}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {work.focus.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <p className="pt-2 text-xs font-semibold text-[#4338CA] group-hover:underline">
                    View Project Case Study &rarr;
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 text-center space-y-4 shadow-xs">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Have a Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              We can help bring your digital product to life with clean code, modern UX, and fast delivery timelines.
            </p>
            <div className="pt-2">
              <Button to="/contact" size="lg" variant="primary">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        <WorkModal work={activeWork} onClose={() => setActiveWork(null)} />
      </div>
    </>
  )
}
