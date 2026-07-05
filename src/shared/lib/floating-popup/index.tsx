import { FC, ReactNode, useState } from 'react';
import {
  ElementProps,
  FloatingFocusManager,
  FloatingPortal,
  Middleware,
  UseFloatingOptions,
  UseFloatingReturn,
  autoUpdate,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import { IFloatingPopupProps } from 'shared/types/global';

export type CallableChildren = (
  isOpen: boolean,
  handleChangeViewState: () => void,
) => ReactNode;

interface Props {
  popup: FC<IFloatingPopupProps>;
  options?: Partial<UseFloatingOptions>;
  interactions?: (
    floating: Pick<UseFloatingReturn, 'context'>,
  ) => ElementProps[];
  modifiers?: Middleware[];
  manageFocus?: boolean;
  children: CallableChildren | ReactNode;
}

export const FloatingPopup: FC<Props> = ({
  popup,
  options,
  interactions,
  modifiers = [],
  manageFocus = false,
  children,
}) => {
  const [isOpened, setOpen] = useState(options?.open ?? false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpened,
    onOpenChange: setOpen,
    middleware: [
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
      ...modifiers,
    ],
    whileElementsMounted: autoUpdate,
    ...options,
  });

  const { isMounted, styles } = useTransitionStyles(context);

  const dismiss = useDismiss(context, {
    ancestorScroll: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    ...(interactions ? interactions({ context }) : []),
  ]);

  const Popup = popup;

  const handleChangeViewStatePopup = () => setOpen((prevState) => !prevState);

  const isChildrenCallable = typeof children === 'function';

  return (
    <>
      <div
        ref={refs.setReference}
        className="popup-container"
        onClick={!isChildrenCallable ? handleChangeViewStatePopup : undefined}
        {...getReferenceProps()}
      >
        {isChildrenCallable
          ? (children as CallableChildren)(isOpened, handleChangeViewStatePopup)
          : children}
      </div>

      {isMounted && (
        <FloatingPortal id="popup">
          <FloatingFocusManager
            context={context}
            modal={false}
            disabled={!manageFocus}
            returnFocus
          >
            <div
              ref={refs.setFloating}
              style={{ ...floatingStyles, ...styles, zIndex: 999999 }}
              {...getFloatingProps()}
            >
              <Popup onClose={handleChangeViewStatePopup} />
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
};
