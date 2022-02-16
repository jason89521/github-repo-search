import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  show: boolean;
  message: string;
}

const initialState: ModalState = {
  show: false,
  message: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: state => {
      state.show = true;
    },
    hide: state => {
      state.show = false;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export default modalSlice;
export const { show, hide, setMessage } = modalSlice.actions;
