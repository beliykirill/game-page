import { FC } from 'react';
import { Nullable } from 'shared/types/global';

export interface ModalProps {
  onClose: () => void;
}

export interface IStack {
  id: number;
  modalCtor: () => Promise<{
    readonly default: FC<ModalProps & Record<string, unknown>>;
  }>;
  props: {
    [key: string]: unknown;
  };
  overlayElement: Nullable<FC<ModalProps>>;
}

export interface ModalsState {
  isVisible: boolean;
  stack: IStack[];
}
