import { RefObject, useEffect } from 'react';

type Callback = (event: MouseEvent) => void;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  onClickOutside: Callback,
): void => {
  useEffect(() => {
    const onMouseDownListener = (event: MouseEvent) => {
      const element = ref?.current;
      const target = event.target as Node;

      if (
        !element ||
        element.contains(target) ||
        document.getElementById('popup')?.contains(target) ||
        document.getElementById('toast')?.contains(target)
      ) {
        return;
      }

      onClickOutside(event);
    };

    document.addEventListener('mousedown', onMouseDownListener);

    return () => {
      document.removeEventListener('mousedown', onMouseDownListener);
    };
  }, [ref, onClickOutside]);
};
