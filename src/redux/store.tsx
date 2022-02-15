import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import repoListSlice from 'redux/repoListSlice';
import { repoApi } from './repoApi';

const store = configureStore({
  reducer: {
    reposList: repoListSlice.reducer,
    [repoApi.reducerPath]: repoApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(repoApi.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
