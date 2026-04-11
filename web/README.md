# Welcome to [Astro](https://astro.build) based [IEEE-Website](https://ieee.iiitd.edu.in)

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```text
├── public/
│   ├── About Us
│   ├── people
│   ├── sponsors
│   ├── hero-img.webp
│   ├── ieee_dsc.jpg
│   ├── logo.png
│   └── logowhite.png
├── src/
│   ├── components/
│   │   ├── Blog
│   │   ├── Events
│   │   ├── Home
│   │   └── Members
│   ├── data/
│   │   └── members.json
│   ├── layouts/
│   │   └── layout.astro
│   ├── lib/
│   │   ├── sanityClient.js
│   │   └── api.js
│   ├── utils/
│   │   └── helpers.js
│   └── pages/
│       ├── blogs/
│       │   ├── category/
│       │   │   └── [category].astro
│       │   ├── [slug].astro
│       │   └── index.astro
│       ├── events.astro
│       ├── members.astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the folder, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn install`      | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |

## Environment variables

Create `web/.env` before starting dev:

1. Copy `web/.env.example` to `web/.env`
2. Update values only if your Sanity project differs

Required variables:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`

Optional variable:

- `PUBLIC_SANITY_GRAPHQL_URL` (auto-generated from project + dataset if omitted)

## 📈 GraphQL playground

- [Sanity GraphQL Playground](https://zakv95rn.api.sanity.io/v1/graphql/production/default)
