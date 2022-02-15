import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import RepoInfo from 'types/RepoInfo';
import FileInfo from 'types/FileInfo';

const cachedDuration = 300; // 5 minutes

export const repoApi = createApi({
  reducerPath: 'repoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: builder => ({
    getRepo: builder.query<RepoInfo, { username: string; repo: string }>({
      query: info => `repos/${info.username}/${info.repo}`,
      keepUnusedDataFor: cachedDuration,
    }),
    getFiles: builder.query<FileInfo[], { username: string; repo: string }>({
      query: info => `repos/${info.username}/${info.repo}/contents`,
      keepUnusedDataFor: cachedDuration,
    }),
  }),
});

export const { useGetRepoQuery, useGetFilesQuery } = repoApi;
