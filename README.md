# GitHub Repositories Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `hoc` folder

This folder contains all high order component. There is only one file called `withAnimation.tsx` in this folder. This high order component aims to add animation to the wrapped component. It is easy to transform it to a normal component because it is really simple. I create this high order component just because I want to practice how to write a high order component.

### `pages` folder

The page components are placed in this folder. Their file structure looks like the components in `components` folder.

### `Redux` folder

This App use Redux to manage global states. There are 3 states in this App:

- modal - determines whether the modal should show up and what message it should display.
- reposList - stores the list of repositories.
- repoApi - stores the information and files of one repository. Using RTK query to cache the fetched data.

### `styles` folder

The global style, colors and breakpoints are placed in this folder.

### `types` folder

The types may be used by other components are placed in this folder.

### `App.tsx`

Configures the structure of the router and shows the modal by the redux state.

### `declaration.d.ts`

Declare svg file as a module such that svg can be used in TypeScript.

### `githubApi.tsx`

This file contains some apis to fetch data from github, including:

- Fetch the list of repositories.
- Search the users that best match the search term.

### `index.tsx`

Global styles, Redux `store` and `BrowserRouter` are added in this file, and the `App` component is rendered in this file also.

## Built with

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/remix-run/react-router)
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [framer motion](https://github.com/framer/motion)
- [@yuxuan-zheng/hooks](https://github.com/jason89521/hooks)
- [@yuxuan-zheng/react-infinite-scroll](https://github.com/jason89521/react-infinite-scroll)

## Improvements

- [x] click outside of th dialog will close the modal
- [x] do not use redux to handle modal
- [ ] use swr to replace redux
