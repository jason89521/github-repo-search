# GitHub Repositories Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> This branch contains the improved version, to see the original version please check out origin branch.

## Features

- List the list of repositories on one user's GitHub
- List the files on one repository
- List 5 recommended repositories when user types in the search field

## [Demo Link](https://xuan-github-repo-search.vercel.app/)

![](demo.gif)

## Get Started

1. clone this project
2. Run the following command:
   ```bash
   yarn
   yarn start
   ```
3. create a `.env.local` file in the root:
   ```
   REACT_APP_TOKEN=YOUR_GITHUB_TOKEN
   ```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Files Structure

All the resource files are in the `src` folder.

### `components` folder

Every component is placed in one folder which at least contains `index.tsx` and `[component-name].tsx`. `[component-name].tsx` implements the functionality of a component. `index.tsx` re-exports the component from `[component-name].tsx`. If a component uses `style-components` to style its elements, then there is an another file called `[component-name].style.tsx`. `[component-name].tsx` imports the styled components from `[component-name].style.tsx`.

So a component folder will looks like this:

```
|-- SearchField
    |-- index.tsx
    |-- SearchField.style.tsx
    |-- SearchField.tsx
```

### `lib` folder

Some utilities created to use SWR easily.

### `pages` folder

The page components are placed in this folder. Their file structure looks like the components in `components` folder.

### `styles` folder

The global style, colors and breakpoints are placed in this folder.

### `types` folder

The types may be used by other components are placed in this folder.

### `App.tsx`

Configures the structure of the router and shows the modal by the redux state.

### `githubApi.ts`

This file contains an api to fetch data from github, including:

- Search the users that best match the search term.

### `index.tsx`

Global styles and `BrowserRouter` are added in this file, and the `App` component is rendered in this file also.

## Built with

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/remix-run/react-router)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [framer motion](https://github.com/framer/motion)
- [swr](https://github.com/vercel/swr)
- [@yuxuan-zheng/hooks](https://github.com/jason89521/hooks)
- [@yuxuan-zheng/react-infinite-scroll](https://github.com/jason89521/react-infinite-scroll)

## Improvements

- [x] click outside of th dialog will close the modal
- [x] do not use redux to handle modal
- [x] use swr to replace redux
- [x] remove high order component
- [x] use private token to raise the limits to 5000
