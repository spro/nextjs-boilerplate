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
    * Example API route to load from
    * Saga to call API and dispatch complete/error states
    * Compatible with Server Side Rendering thanks to [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
* Easy use of [Heroicons](https://heroicons.com/) with [heroicons-react](https://github.com/impulse/heroicons-react)
* A few handy common utilities like Input and Loader components

## Note on error handling

In the example types, there is an `error` field on both the `ThingsPageState` and `ThingsResponse` returned by an API call. I haven't settled on this yet, but I think it makes sense to split these up to differentiate between errors explicitly returned by the API (say permissions or validation) vs. "system errors" like timeouts or caught runtime errors. This should leave the option open for more precise error reporting.

