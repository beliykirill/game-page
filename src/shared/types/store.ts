import { makeStore } from 'entities';
import { ModalsState } from 'shared/types/modal';

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

export interface RootState {
  modal: ModalsState;
}
