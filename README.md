# ComicVerse Hub — Build Plan

## Site Map & Files
- `index.html`: Hero carousel, highlights (New Releases, Popular Series, Publisher Spotlights).
- `browse.html`: Catalog grid with filter + sort controls, links into detail page.
- `comic-detail.html`: Template view, populated via query param and shared data object.
- `cart.html`: Persistent cart view with quantity controls, totals, mock checkout.
- `assets/images/`: Optimized cover placeholders + logo/background textures.
- `assets/styles/`
	- `base.css`: Variables, typography, layout primitives, utility classes.
	- `components.css`: Cards, buttons, nav, carousel, modals.
	- `pages.css`: Page-specific tweaks (hero, browse grid, detail layout, cart table).
- `assets/data/comics.js`: Exports `COMICS` array + lookup helpers (publisher, genre, release date, price, hero flags).
- `assets/scripts/`
	- `storage.js`: Wrapper around `localStorage` with namespaced helpers.
	- `cart.js`: Cart state (add/remove/update), total calculations, persistence hooks.
	- `ui.js`: Shared DOM utilities (render cards, badges, format currency, handle skeleton loaders).
	- `index.js`, `browse.js`, `comic-detail.js`, `cart-page.js`: Page bootstraps wiring UI to data.

## Data & State Strategy
- Comics stored as static objects (id, title, description, publisher, characters, price, releaseDate, coverImg, flags like `isNew`, `isPopular`).
- Detail pages and browse filters consume the same `COMICS` array to stay in sync.
- Cart persisted to `localStorage` (key: `comicverse-cart-v1`). On load, hydrate state and broadcast updates via custom events for modular scripts.

## UX & Interaction Goals
- Sticky header with immersive mega-navigation, CTA buttons styled like comic panels.
- Carousel: CSS-powered slides + JavaScript interval/controls (pause on hover, swipe friendly).
- Browse filters: buttons + dropdowns for publisher, genre, hero; sorting select with instant re-render.
- Detail view: zoom-on-hover cover, expandable creator credits, animated “Add to Cart” toast.
- Cart page: responsive table/card layout, inline quantity steppers, live total + VAT breakdown, mock checkout confirmation modal.

## Responsive & Visual Direction
- Mobile-first grid (CSS Grid + clamp-based font sizes). Breakpoints at 600px, 900px, 1200px.
- Color palette: deep navy background, neon accent gradients, subtle halftone textures.
- Use CSS custom properties for colors/spacing to keep themes consistent and enable future dark/light toggles.
- Prefer GPU-friendly transitions (transform/opacity) for hover effects.

## Next Steps
1. Scaffold folders/files listed above.
2. Populate `comics.js` with ~12 curated entries covering major publishers/genres.
3. Implement shared header/footer partials (via HTML snippets or JS render helpers).
4. Build each page iteratively, validating filters, routing, and cart persistence.

## Implementation Highlights
- ✅ Multi-page structure (`index`, `browse`, `comic-detail`, `cart`) wired with a shared navigation experience and consistent hero aesthetic.
- ✅ Static data source (`assets/data/comics.js`) exposes helper utilities for featured, new, and popular collections.
- ✅ Modular JavaScript (`storage`, `cart`, `ui`, per-page modules) keeps logic organized and reusable.
- ✅ Carousel, filtering, sorting, detail hydration, and cart persistence delivered with vanilla ES modules.
- ✅ Custom SVG cover art stored under `public/covers` so Vite serves them directly without bundler imports.

## Run Locally (Vite Dev Server)
```bash
npm install
npm run dev
```

The command above spins up Vite at `http://localhost:4173` with hot module reload across all four HTML entry points. Need a static preview without rebuilding? `npm run preview` serves the production bundle.

### Build for Deployment
```bash
npm run build
```

Artifacts land in `dist/` ready for GitHub Pages, Netlify, Vercel, or any static host. A quick smoke-test of the production output is available via `npm run preview`.

### Legacy Static Server (Optional)
If you still prefer the zero-dependency approach:

```bash
python -m http.server 4173
```

Open `http://localhost:4173` afterward.

## Testing & Manual QA
- `npm run lint` ensures Prettier coverage across HTML/CSS/JS/JSON files.
- `npm run format` auto-fixes style issues when collaborating.
- Navigate through all four pages to confirm routing and shared header/footer styling.
- On `browse.html`, combine publisher + genre chips, search for characters, and switch sorters to verify instant filtering.
- Load `comic-detail.html?id=CV-001` (or any other ID) to check dynamic hydration and Add-to-Cart toasts.
- On `cart.html`, add and remove multiple titles, tweak quantities, refresh the browser to confirm `localStorage` persistence, and trigger the mock checkout message.