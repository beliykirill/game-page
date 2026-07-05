import { useRef } from 'react';
import { useFocusTrap, useOnClickOutside } from 'shared/lib/hooks';
import { Nullable } from 'shared/types/global';
import { CenteredContent, CenteredOverlayContainer } from './styled';
import { ModalWrapper } from './types';

export const CenteredModalWrapper: ModalWrapper = ({ children, onClose }) => {
  const contentRef = useRef<Nullable<HTMLDivElement>>(null);

  useOnClickOutside(contentRef, onClose);
  useFocusTrap(contentRef, { onEscape: onClose });

  return (
    <CenteredOverlayContainer>
      <CenteredContent
        ref={contentRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </CenteredContent>
    </CenteredOverlayContainer>
  );
};
