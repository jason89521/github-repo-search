import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RepoType } from 'type';

type ReposListState = {
  data: RepoType[];
};

const initialState: ReposListState = { data: [] };

const reposListSlice = createSlice({
  name: 'reposList',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<RepoType[]>) => {
      state.data = action.payload;
    },
    appendNext: (state, action: PayloadAction<RepoType[]>) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export default reposListSlice;

export const { reset, appendNext } = reposListSlice.actions;
