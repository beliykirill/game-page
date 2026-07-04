export type Nullable<T> = T | null;

export interface IFloatingPopupProps {
  onClose: () => void;
  isOpen?: boolean;
}
