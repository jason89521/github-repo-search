import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import RepoInfo from 'types/RepoInfo';
import FileInfo from 'types/FileInfo';

export const repoApi = createApi({
  reducerPath: 'repoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: builder => ({
    getRepo: builder.query<RepoInfo, { username: string; repo: string }>({
      query: info => `repos/${info.username}/${info.repo}`,
    }),
    getFiles: builder.query<FileInfo[], { username: string; repo: string }>({
      query: info => `repos/${info.username}/${info.repo}/contents`,
    }),
  }),
});

export const { useGetRepoQuery, useGetFilesQuery } = repoApi;
