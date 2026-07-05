import { ComponentType, ReactNode } from 'react';

export type ModalWrapperProps = {
  isVisible?: boolean;
  onClose: () => void;
  children: ReactNode;
};

export type ModalWrapper = ComponentType<ModalWrapperProps>;
