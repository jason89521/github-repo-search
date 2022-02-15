import axios, { AxiosResponse } from 'axios';

import RepoInfo from 'types/RepoInfo';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  params: {
    per_page: 10,
  },
});

export const fetchRepos = (username: string, pageNumber = 1) => {
  return githubApi.get<any, AxiosResponse<RepoInfo[]>>(`/users/${username}/repos`, {
    params: { page: pageNumber },
  });
};

export const searchUser = (username: string) => {
  return githubApi.get('/search/users', { params: { q: username, per_page: 5 } });
};

export default githubApi;
