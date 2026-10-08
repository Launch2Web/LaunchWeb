import { useEffect } from 'react'

export function SEO({
  title = 'Launch Web Solutions | Best Web Developer & Software Company in Chennai, Kanchipuram & Vandavasi',
  description = 'Launch Web Solutions (launchwebsolutions.in) is a premier web development company & custom software studio serving Chennai, Kanchipuram, Vandavasi & global clients. Expert web developers building high-speed websites, custom web apps & AI promo ads.',
  keywords = 'launchwebsolutions.in, Launch Web Solutions, Launch Web Solutions Vandavasi, Launch Web Solutions Kanchipuram, Launch Web Solutions Chennai, web developer, website developer, web developer Vandavasi, web developer Kanchipuram, web developer Chennai, website development company in Vandavasi, website development company in Kanchipuram, website development company in Chennai, web design company Chennai, custom software development company, AI ads, shop promotion video, React developer, Spring Boot software developer',
  canonicalUrl = 'https://launchwebsolutions.in/',
  ogImage = 'https://launchwebsolutions.in/logo.png',
  schemaJson = null,
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    }

    // 5. Update Open Graph Meta
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', description)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    let ogImg = document.querySelector('meta[property="og:image"]')
    if (ogImg) ogImg.setAttribute('content', ogImage)

    // 6. Inject Dynamic Page Schema
    let existingScript = document.getElementById('dynamic-page-schema')
    if (existingScript) {
      existingScript.remove()
    }

    if (schemaJson) {
      const script = document.createElement('script')
      script.id = 'dynamic-page-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schemaJson)
      document.head.appendChild(script)
    }

    // Scroll to top on route change for best UX
    window.scrollTo(0, 0)
  }, [title, description, keywords, canonicalUrl, ogImage, schemaJson])

  return null
}
