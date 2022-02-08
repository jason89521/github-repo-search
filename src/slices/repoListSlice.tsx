import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RepoType } from 'type';

type ReposListState = {
  data: RepoType[];
  hasMore: boolean;
  page: number;
};

const initialState: ReposListState = { data: [], hasMore: false, page: 1 };

const reposListSlice = createSlice({
  name: 'reposList',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<RepoType[]>) => {
      state.data = action.payload;
      state.hasMore = action.payload.length > 0;
      state.page = 1;
    },
    appendNext: (state, action: PayloadAction<RepoType[]>) => {
      state.data = [...state.data, ...action.payload];
      state.hasMore = action.payload.length > 0;
      state.page += 1;
    },
  },
});

export default reposListSlice;

export const { reset, appendNext } = reposListSlice.actions;
