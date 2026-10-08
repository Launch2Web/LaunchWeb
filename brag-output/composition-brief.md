# Hyperframes Composition Brief: Launch Web

## Objective
Create a short polished launch-style brag video for Launch Web, a modern web design and software studio.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 20 seconds

## Source Material
- Project root: /Users/dhinagar/Documents/antigravity/LunchWeb
- Primary files read: index.html, src/index.css, src/data/content.js, src/pages/Home.jsx
- Product name: Launch Web
- Tagline / strongest claim: "Digital Experiences Built to Move Your Business Forward."
- Key UI or visual moment to recreate: Hero gradient headline, stats bar, service cards
- Copy that must appear verbatim:
  - "Your business deserves better than a template."
  - "Digital Experiences Built to Move Your Business Forward."
  - "100% Custom Code" · "98+ Lighthouse" · "10+ Live Products" · "24/7 Support"
  - "Web Design & Development" · "Custom Software" · "AI Ads & Promotion"
  - "Launch Web"
  - "We build it. You grow."

## Creative Direction
- Tone preset: polished
- Creative direction: confident studio reel — premium, clean, no hype
- Interpretation: Fewer scenes, longer holds. Restraint communicates confidence. Every element breathes. Typography is elegant, transitions smooth.
- Angle: Launch Web ships real production code — React, Spring Boot, the works. Show the real live projects, the real tech stack, and let the numbers speak.
- Hook: "Your business deserves better than a template." — big text on dark background, confident pause
- Outro / punchline: "Launch Web. We build it. You grow." — gradient logo on dark background
- Avoid:
  - Generic SaaS language ("streamline your workflow")
  - Abstract filler visuals
  - Unrelated visual redesign — use the project's own palette and typography

## Visual Identity
- Background: #F8FAFC (near-white slate)
- Dark background: #0F172A (deep navy — for hook and outro scenes)
- Text: #0F172A (deep navy)
- Secondary text: #475569 (slate)
- Accent: #4F46E5 (indigo) — primary accent
- Accent gradient: linear-gradient(135deg, #4F46E5 0%, #2563EB 100%) — indigo to blue
- Border: #E2E8F0 (light slate)
- Success: #16A34A (green — for status indicators)
- Display font: Plus Jakarta Sans (extrabold, 800)
- Body font: Inter (400, 500, 600)
- Visual references from the project: hero gradient text, rounded-3xl cards with slate borders, indigo accent badges

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Hook — 4s — Dark background, "Your business deserves better than a template." large white text scales in
2. Hero Reveal — 5s — Light background, "Digital Experiences / Built to Move Your / Business Forward." with gradient text, tagline below
3. Stats — 4s — Four stat cards arrive one by one on beat grid (8.74s, 9.29s, 9.83s, 10.37s)
4. Services Fan — 4s — Three service highlight cards slide up one by one
5. Outro / Logo — 3s — Dark background, "Launch Web" gradient logo, "We build it. You grow." tagline

## Audio
- Audio role: warm professional bed with confident restraint
- Audio arc: music enters warmly, builds through stats, holds through services, fades out on outro
- Music: happy-beats-business-moves-vol-12-by-ende-dot-app.mp3
- Music treatment: volume 0.32, starts at 0s, gentle fade-out over final 2s
- Music cue guidance: bundled preset at brag-temp/skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json — tempo ~110 BPM. Strong cues at 8.74s (stats reveal), 13.11s (services), 17.47s (portfolio). Beat grid for stat cards: 8.74, 9.29, 9.83, 10.37
- Audio-reactive treatment: subtle; hero gradient glow breathes with RMS, stat card presence pulses gently on bass
- Audio-coupled moments:
  - Scene 3 stat cards — card-place sound on each card arrival (beat-grid aligned)
  - Scene 4 service cards — card-slide sound on each service card
  - Scene 5 logo reveal — one soft impactBell_heavy_000 on logo slam
- SFX selection guidance: use casino/card-place for stat cards, casino/card-slide for service cards, impact/impactBell_heavy_000 for final logo. Keep all SFX at 0.65-0.75 volume.
- SFX analysis guidance: brag-temp/skills/brag/assets/sfx/sfx-analysis.md
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: copy the chosen music and any Hyperframes-selected SFX into `brag-output/composition/assets/`

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, `hyperframes-cli`. /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow.

Requirements:
- Show the real hero headline, stat cards, and service cards from the Launch Web project.
- Keep all text readable in the final render.
- Keep the video within 20 seconds.
- Include the planned music/SFX layer.
- Treat music cue metadata as optional timing hints.
- Major reveals may move toward nearby strong cues within ±0.15s.
- Use SFX to support motion: card sounds for card reveals, impact bell for logo.
- Use local assets for audio.
- Run `hyperframes check` before render.
