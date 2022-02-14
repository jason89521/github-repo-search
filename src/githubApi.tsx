import axios, { AxiosResponse } from 'axios';

import RepoInfo from 'types/RepoInfo';
import FileInfo from 'types/FileInfo';

const githubApi = axios.create({
  baseURL: ' https://api.github.com/',
  params: {
    per_page: 10,
  },
});

export const fetchRepos = (username: string, pageNumber = 1) => {
  return githubApi.get<any, AxiosResponse<RepoInfo[]>>(`/users/${username}/repos`, {
    params: { page: pageNumber },
  });
};

export const fetchRepo = (username: string, repo: string) => {
  return githubApi.get<any, AxiosResponse<RepoInfo>>(`repos/${username}/${repo}`);
};

export const fetchFiles = (username: string, repo: string) => {
  return githubApi.get<any, AxiosResponse<FileInfo[]>>(`repos/${username}/${repo}/contents`);
};

export const searchUser = (username: string) => {
  return githubApi.get('/search/users', { params: { q: username, per_page: 3 } });
};

export default githubApi;
