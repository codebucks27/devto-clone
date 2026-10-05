# Build Dev.to clone website with React JS

This repository contains code for Dev.to clone in reactjs.

View Demo:
https://devto-clone.vercel.app/

If you want to learn how to create it please follow below tutorial:

https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA/

### Detected Warnings at Production: 
--> At hreff attribute of a link write /# instead of just #
    in the content.js <br />
--> Add handleScroll function inside useeffect where we're calling it else it will
    show reach hook missing dependency <br />
--> Same goes for fetchAgain() function! 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Changes

Migrated CRA to Vite 8, React 19, Vitest 5, and Bun 1.4.2 (`bun.lock`); upgraded dependencies, JSX extensions, Sass modules, and Web Vitals (`on*`/INP). ESLint 9.39.5 is retained despite npm deprecation and EOL (2026-08-06) because stable React, accessibility, and import plugins exclude ESLint 10. Original browser targets and CSS autoprefixing remain.

Use a Node version supported by `package.json`, then `bun install --frozen-lockfile`. Commands: `bun run dev`/`bun run start`, `bun run lint`, `bun run test` (once), `bun run test:watch`, `bun run build`, and `bun run preview`. Dev/preview default to port 3000; builds still output `build/`. CRA commands above remain historical; `eject` is removed.

Vite loads mode-specific `.env` files; shell values win and Bun preloading is disabled. Client variables use `REACT_APP_*` or `VITE_*`, plus explicit `NODE_ENV`/`PUBLIC_URL`. Legacy `process.env.PUBLIC_URL` and `%PUBLIC_URL%` work. Set `PUBLIC_URL=/subpath`, an absolute URL, or `.` for non-root builds.
