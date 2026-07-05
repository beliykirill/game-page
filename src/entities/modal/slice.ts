import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IStack, ModalsState } from 'shared/types/modal';

const initialState: ModalsState = {
  isVisible: false,
  lastStackId: 0,
  stack: [],
};

const defaultModal: Partial<IStack> = {
  id: 0,
  modalCtor: null,
  overlayElement: null,
  props: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, { payload }: PayloadAction<Partial<IStack>>) => {
      const { modalCtor, overlayElement, props, options } = payload;

      const nextModalId = state.lastStackId + 1;

      state.stack = [
        {
          ...defaultModal,
          modalCtor: modalCtor ?? null,
          props: props ?? {},
          options,
          overlayElement: overlayElement ?? null,
          id: nextModalId,
        },
        ...state.stack,
      ];
      state.lastStackId = nextModalId;
      state.isVisible = true;
    },
    hideModal: (state, { payload }: PayloadAction<'force' | undefined>) => {
      if (payload === 'force') {
        state.stack = [];
        state.isVisible = false;

        return;
      }

      state.stack = state.stack.slice(1);
      state.isVisible = state.stack.length > 0;
    },
  },
});
