![Static Badge](https://img.shields.io/badge/Nuxt3-green)

# Landing Page Nuxt

New landing page for my new netlify domain, [thomasjt.com](https://www.thomasjt.com)! The previous landing page, also here on my GitHub, needed a remake. No contact form on this one!

The Three.js part of this landing page, is based on the post processing example on [ThreeJS](https://threejs.org/examples/), and adapted to work with Vue / Nuxt. However, some differences in terms of mesh used, etc. More ThreeJS later on

Back to my portfolio work :penguin:

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Fixed

- [X] Changed the text scroller into a GSAP text scroller, see this [GSAP community post](https://gsap.com/community/forums/topic/42921-horizontal-infinite-text-loop-without-empty-spaces/)

- [X] Updated CSS for most wrappers.

- [X] Made the ThreeJS scene full screen and fixed responsive resize issue.

- [X] Added apple style toggle switch for audio, using v-model, credits to the original CSS solution here https://dev.to/urielbitton/how-to-design-an-ios-style-switch-4maj - which I've now adpoted into Vue.
.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## More on Nuxt 3

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information :penguin: