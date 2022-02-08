# Dcard Frontend homework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get Started

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Files Structure

The following section will describe what the important files or folders do in the `src` folder

### `index.tsx` 

Global style and `BrowserRouter` are added in this file, and the `App` component is rendered in this file also.

### `App.tsx`

This file contains the App component. The main tasks of the App component are:
- Fetch the list of repositories from github.
- Store the list of repositories such that `Repos` page can render the repositories.

### `githubApi.tsx`

This file contains all apis to fetch data from github, including:
- Fetch the list of repositories.
- Fetch a single repository.
- Fetch the contents of a single repository.

### `styles`

This folder contains the global style and the styles that each component may need, including:
- Colors
- Breakpoints

### `pages`

There are three pages in this app, `Home`, `Repos` and `Repo`. This folder contains these page components.

### `components`

This folder contains all components each page may need.

## Built with

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/remix-run/react-router)
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)

## [Live Demo](https://dcard-homework.vercel.app/)
