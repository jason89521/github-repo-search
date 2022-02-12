# Dcard Frontend homework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get Started

1. clone this project
2. Run the following command:
    ```bash
    yarn start
    ```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Files Structure

The following section will describe what the files or folders do in the `src` folder. Every component in the `components` folder or `pages` folder is placed in one folder which contains `[name].tsx` , `[name].style.tsx` (if the component has styles) and `index.tsx`. The `[name].tsx` contains the functionality of the component. The `style.tsx` contains the styles of the components. The `index.tsx` reexports the component from `[name].tsx`.

### `index.tsx` 

Global style and `BrowserRouter` are added in this file, and the `App` component is rendered in this file also.

### `App.tsx`

The `App` component configures the structure of the router.

### `githubApi.tsx`

This file contains all apis to fetch data from github, including:
- Fetch the list of repositories.
- Fetch a single repository.
- Fetch the contents of a single repository.

### `store.tsx`

This file configures the Redux store and exports the custom dispatch and selector hooks.

### `styles`

This folder contains the global style and the styles that each component may need, including:
- Colors
- Breakpoints

### `pages`

There are three pages in this app, `Home`, `Repos` and `Repo`. This folder contains these page components.

#### `Home`

In this page, user can type an username to search the repositories. If the username exists, this app will redirect user to `/users/{username}/repos`; otherwise, this app will show a dialog to tell user that the username is not found.\
When typing in the input field, this page will show a recommendation list for best matched users.

#### `Repos`

User in `/users/{username}/repos` will see this page. This page will display `{username}` in the top and the repositories list of `{username}`. The repositories list will show 10 repositories at first time until user scrolls down to the bottom. If the `{username}` has more repositories, then append next 10 repositories to the list.

#### `Repo`
In the `Repos` page, if user click the repository's name, this app will redirect user to `/users/{username}/repos/{repo}`, and this component will be mounted on this page. In addition to the general information about the repository, this page also shows the files of the repository. User can click the name of the repository to open a new tab about the repository in github, or click each file to open a new tab about the file in github.

### `components`

This folder contains all components each page may need.

### `slices`

This folder contains the slices of Redux.

## Built with

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/remix-run/react-router)
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- [styled-components](https://github.com/styled-components/styled-components)
- [axios](https://github.com/axios/axios)
- [framer motion](https://github.com/framer/motion)
- [yuxuan-zheng/hooks](https://github.com/jason89521/hooks)

## [Live Demo](https://dcard-homework.vercel.app/)
