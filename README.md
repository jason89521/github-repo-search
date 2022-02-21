# Dcard Frontend homework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [Live Demo](https://xuan-github-repo-search.vercel.app/)

![](demo.gif)

## Get Started

1. clone this project
2. Run the following command:
    ```bash
    yarn
    yarn start
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Files Structure

The following section will describe what the files or folders do in the `src` folder. Every component in the `components` folder or `pages` folder is placed in one folder which contains `[name].tsx` , `[name].style.tsx` (if the component has styles) and `index.tsx`. The `[name].tsx` contains the functionality of the component. The `style.tsx` contains the styles of the components. The `index.tsx` reexports the component from `[name].tsx`.

### `index.tsx` 

Global styles, Redux `store` and `BrowserRouter` are added in this file, and the `App` component is rendered in this file also.

### `App.tsx`

The `App` component configures the structure of the router and shows the modal by the redux state.

### `githubApi.tsx`

This file contains all apis to fetch data from github, including:
- Fetch the list of repositories.
- Search the users that best match the search term.

### `styles`

This folder contains the global style and the styles that each component may need, including colors and breakpoints.

### `pages`

#### `Base`

The layout of this app.

#### `Home`

In this page, user can type an username to search the repositories. When form is submitted and the search username exists, this page will fetch the list of repositories to the redux store, and then redirect to `users/:username/repos`.

#### `Repos`

When users scrolls down to the bottom of this page, this page will feth the next 10 repositories to the redux store.

#### `Repo`

Use RTK query to cache fetched data for 5 minutes such that this page will not make a request with the same username and reponame.

### `components`

This folder contains all components each page may need.

### `redux`

This folder contains the redux slices, RTK query api and store configuration.

### `types`

Define types that may be used in other files.

## Built with

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/remix-run/react-router)
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [framer motion](https://github.com/framer/motion)
- [@yuxuan-zheng/hooks](https://github.com/jason89521/hooks)
- [@yuxuan-zheng/react-infinite-scroll](https://github.com/jason89521/react-infinte-scroll)
