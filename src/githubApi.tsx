import axios, { AxiosResponse } from 'axios';
import { RepoType, FileType } from 'type';

const githubApi = axios.create({
  baseURL: ' https://api.github.com/',
  params: {
    per_page: 10,
  },
});

export const fetchRepos = (username: string, pageNumber = 1) => {
  return githubApi.get<any, AxiosResponse<RepoType[]>>(`/users/${username}/repos`, {
    params: { page: pageNumber },
  });
};

export const fetchRepo = (username: string, repo: string) => {
  return githubApi.get<any, AxiosResponse<RepoType>>(`repos/${username}/${repo}`);
};

export const fetchFiles = (username: string, repo: string) => {
  return githubApi.get<any, AxiosResponse<FileType[]>>(`repos/${username}/${repo}/contents`);
};

export default githubApi;
