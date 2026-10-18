# Danning (Danielle) Li — Design Engineering Portfolio

Website: https://danningli0404.github.io/danielle-design-portfolio/

The original portfolio homepage is preserved from its latest published source. All seven case studies now continue its material-landscape background, cream, blue-grey, pine-green and ochre palette, typography, image framing and navigation. Project claims, personal contributions, research sources and the two language versions are retained. Language selection uses plain text with a fine underline, without circular backgrounds.

## Development

Use Node.js 22.18+ and pnpm 11.25.0.

- `pnpm install --frozen-lockfile`
- `pnpm dev`
- `NEXT_PUBLIC_PAGES_BASE_PATH=/danielle-design-portfolio pnpm build:pages`
- `pnpm test:pages`

The build generates static routes for both languages. Shared page components live in `components/portfolio-home.tsx` and `components/portfolio-case.tsx`; project content lives in `lib/`. The export preparation script keeps original image paths compatible with the GitHub Pages project directory. Native images preserve the original source bitmaps without requiring an image server.

## Publication

Pushes to `main` run `.github/workflows/pages.yml` and publish the generated `out/` directory to GitHub Pages. There is no paid domain or hosting requirement. The previous ChatGPT-hosted website remains separate and is not changed by this workflow.

Project images and case-study materials belong to Danning Li and should not be reused without permission.
