import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RepoType } from 'type';

type ReposListState = {
  data: RepoType[];
  page: number;
};

// Set page to 0 such that if this app is directly opened with url = /users/:username/repos,
// the repos page would not fetch data from page 2.
const initialState: ReposListState = { data: [], page: 0 };

const reposListSlice = createSlice({
  name: 'reposList',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<RepoType[]>) => {
      state.data = action.payload;
      state.page = 1;
    },
    appendNext: (state, action: PayloadAction<RepoType[]>) => {
      state.data = [...state.data, ...action.payload];
      state.page += 1;
    },
  },
});

export default reposListSlice;

export const { reset, appendNext } = reposListSlice.actions;
