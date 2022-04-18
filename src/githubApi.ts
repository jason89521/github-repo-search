import axios, { AxiosResponse } from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `token ${process.env.REACT_APP_TOKEN}`,
  },
  params: {
    per_page: 10,
  },
});

export const searchUser = (username: string) => {
  return githubApi.get<any, AxiosResponse<{ items: { login: string }[] }>>('/search/users', {
    params: { q: username, per_page: 5 },
  });
};

export default githubApi;
