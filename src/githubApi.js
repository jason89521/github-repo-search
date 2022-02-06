import axios from 'axios';

const githubApi = axios.create({
  baseURL: ' https://api.github.com/',
  params: {
    per_page: 10,
  },
});

export const fetchRepos = (username, pageNumber = 1) => {
  return githubApi.get(`/users/${username}/repos`, {
    params: { page: pageNumber + 1 },
  });
};

export const fetchRepo = (username, repo) => {
  return githubApi.get(`repos/${username}/${repo}`);
};

export const fetchFiles = (username, repo) => {
  return githubApi.get(`repos/${username}/${repo}/contents`);
};

export default githubApi;
