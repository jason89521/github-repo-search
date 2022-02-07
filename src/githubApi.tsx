import axios, { AxiosResponse } from 'axios';
import { Repo, File } from 'type';

const githubApi = axios.create({
  baseURL: ' https://api.github.com/',
  params: {
    per_page: 10,
  },
});

export const fetchRepos = (username: string, pageNumber = 1) => {
  return githubApi.get<any, AxiosResponse<Repo[]>>(`/users/${username}/repos`, {
    params: { page: pageNumber },
  });
};

export const fetchRepo = (username: string, repo: string) => {
  return githubApi.get<any, AxiosResponse<Repo>>(`repos/${username}/${repo}`);
};

export const fetchFiles = (username: string, repo: string) => {
  return githubApi.get<any, AxiosResponse<File[]>>(`repos/${username}/${repo}/contents`);
};

export default githubApi;
