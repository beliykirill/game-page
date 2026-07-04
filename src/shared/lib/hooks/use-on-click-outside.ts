import { RefObject, useEffect } from 'react';

type Callback = (event: MouseEvent) => void;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  onClickOutside: Callback,
): void => {
  useEffect(() => {
    const onMouseDownListener = (event: MouseEvent) => {
      const element = ref?.current;

      if (
        !element ||
        element.contains(event.target as Node) ||
        document.getElementById('popup').contains(event.target) ||
        document.getElementById('toast').contains(event.target)
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
