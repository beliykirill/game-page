import { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CenteredModalWrapper } from 'features/modal';
import { hideModal } from 'entities/modal';
import { Nullable } from 'shared/types/global';
import { ModalsState } from 'shared/types/modal';
import { RootState } from 'shared/types/store';
import { DisabledScrollStyle } from 'shared/ui';
import { Backdrop, Layout } from './styled';

export const ModalSystem: FC = () => {
  const dispatch = useDispatch();

  const modal = useSelector<RootState, ModalsState>((state) => state.modal);

  const [portal, setPortal] = useState<Nullable<Element>>(null);

  const { stack, isVisible } = modal;

  const currentStack = stack[0];

  const ModalComponent = currentStack?.modalCtor
    ? dynamic(currentStack.modalCtor, { ssr: false })
    : null;

  const OverlayElement = currentStack?.overlayElement || CenteredModalWrapper;

  const onClose = () => dispatch(hideModal());

  useEffect(() => setPortal(document.getElementById('modal')), []);

  if (!portal) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <Layout>
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />

          <OverlayElement onClose={onClose}>
            <DisabledScrollStyle />

            {ModalComponent && (
              <ModalComponent onClose={onClose} {...currentStack?.props} />
            )}
          </OverlayElement>
        </Layout>
      )}
    </AnimatePresence>,
    portal,
  );
};
