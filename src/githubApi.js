import axios from 'axios';

const githubApi = axios.create({
  baseURL: ' https://api.github.com/',
  params: {
    per_page: 10,
  },
});

/** @typedef {import('type').Repo} Repo */

/** @typedef {import('type').File} File */

/**
 * @param {string} username
 * @param {number} pageNumber
 * @returns {Promise<import('axios').AxiosResponse<Repo[], any>>}
 */
export const fetchRepos = (username, pageNumber = 1) => {
  return githubApi.get(`/users/${username}/repos`, {
    params: { page: pageNumber + 1 },
  });
};

/**
 * @param {string} username
 * @param {string} repo
 * @returns {Promise<import('axios').AxiosResponse<Repo, any>>}
 */
export const fetchRepo = (username, repo) => {
  return githubApi.get(`repos/${username}/${repo}`);
};

/**
 * @param {string} username
 * @param {string} repo
 * @returns {Promise<import('axios').AxiosResponse<File[], any>>}
 */
export const fetchFiles = (username, repo) => {
  return githubApi.get(`repos/${username}/${repo}/contents`);
};

export default githubApi;
