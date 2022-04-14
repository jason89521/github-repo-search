import axios, { AxiosRequestConfig } from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  params: {
    per_page: 10,
  },
});

const createFetcher = (config?: AxiosRequestConfig) => async (url: string) => {
  try {
    const res = await githubApi.get(url, config);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    }
    throw new Error('unexpected error');
  }
};

export default createFetcher;
