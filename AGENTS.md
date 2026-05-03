# Club Website Template (Astro + Sanity CMS)

## Quick Start

```bash
cd web
yarn install
yarn dev     # Development server at localhost:4321
yarn build   # Production build to web/dist/
```

## Architecture

- **Frontend**: Astro 4.x with React integration
- **Styling**: Tailwind CSS + custom CSS variables for dark/light theming
- **Content**: Sanity CMS (headless) for events, blogs, members
- **Monorepo**: Root `package.json` workspaces for `web/` and `studio/`

## Key Files

| Path | Purpose |
|------|---------|
| `web/astro.config.mjs` | Astro config, integrations (tailwind, react, sitemap) |
| `web/src/layouts/Layout.astro` | Base layout with header, footer, theme toggle |
| `web/src/lib/sanityClient.js` | Sanity client configuration |
| `studio/schemas/documents/*.js` | CMS content types (event, blog, author, member) |

## CMS Content Types

Edit in `studio/schemas/documents/`:
- `event.js` - Event name, date, poster, description, form link
- `blog.js` - Blog posts with categories
- `author.js` - Blog authors
- `member.js` - Team members (name, role, image, socials)

## Customization Checklist for New Club

1. **Update config**: Edit `web/astro.config.mjs` - change `site` URL
2. **Theme colors**: Modify CSS variables in `web/src/layouts/Layout.astro` (`:root` and `:root[data-theme="dark"]`)
3. **Logos**: Replace `/logo.png`, `/logowhite.png`, `/hero-img.webp`
4. **Navigation**: Edit header links in `Layout.astro` (lines 94-98)
5. **Social links**: Edit footer in `Layout.astro`
6. **Sanity setup**: Configure `studio/sanity.json` and deploy studio to Sanity.io

## Data Flow

- Events/Blogs come from Sanity CMS via GROQ queries in `web/src/lib/api.js`
- Static member data in `web/src/data/members.json`
- Fallback supplemental events in `web/src/data/supplementalEvents.js`

## Common Components

- `web/src/components/Home/HomeHero.astro` - Hero section
- `web/src/components/Home/About.astro` - About section  
- `web/src/components/Events/EventSection.astro` - Events grid
- `web/src/components/Events/EventCard.astro` - Event card
- `web/src/components/Members/MemberSection.astro` - Team grid
- `web/src/components/Blog/BlogPreview.astro` - Blog preview cards