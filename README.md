# Next.js Boilerplate with TypeScript, TailwindCSS, and Redux-Saga

Just like it says on the tin. Clone and be on your way, or use the create-next-app script:

```bash
yarn create next-app -e https://github.com/spro/nextjs-boilerplate
```

* [TypeScript](https://www.typescriptlang.org/) configuration
* [TailwindCSS](https://tailwindcss.com/) with [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms) and purging configured
* Starting point for state with [Redux-Saga](https://redux-saga.js.org/)
    * Model, response, and page state types
    * Basic load/complete/error actions and reducer
    * Saga to call API and dispatch completed/error states
    * "Isomorphic" API usable via `fetch` from the client or directly in `getServerSideProps`
    * Server Side Rendering support with Redux thanks to [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
* Easy use of [Heroicons](https://heroicons.com/) with [heroicons-react](https://github.com/impulse/heroicons-react)
* A few handy common utilities like Input and Loader components

## Demo

Fetch 5 random things with a fake delay and 20% chance of error:

https://nextjs-boilerplate.spro.vercel.app/

Or pre-render the page with SSR:

https://nextjs-boilerplate.spro.vercel.app/?preload=1
