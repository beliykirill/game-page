import { FC } from 'react';
import { Nullable } from 'shared/types/global';

export interface ModalProps {
  onClose: () => void;
}

export interface IStack {
  id: number;
  modalCtor: Nullable<
    () => Promise<{
      readonly default: FC<ModalProps & Record<string, unknown>>;
    }>
  >;
  props: {
    [key: string]: unknown;
  };
  options?: Record<string, unknown>;
  overlayElement: Nullable<FC<ModalProps>>;
}

export interface ModalsState {
  isVisible: boolean;
  lastStackId: number;
  stack: IStack[];
}
