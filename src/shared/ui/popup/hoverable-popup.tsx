import { FC, ReactNode } from 'react';
import {
  flip,
  offset as offsetMiddleware,
  Placement,
  safePolygon,
  shift,
  useClick,
  useHover,
} from '@floating-ui/react';
import { CallableChildren, FloatingPopup } from 'shared/lib/floating-popup';
import { IFloatingPopupProps } from 'shared/types/global';

interface Props {
  popup: FC<IFloatingPopupProps>;
  offset?: number;
  placement?: Placement;
  isMobile?: boolean;
  children: CallableChildren | ReactNode;
}

export const HoverablePopup: FC<Props> = ({
  popup,
  offset = 0.1,
  placement = 'bottom',
  isMobile = false,
  children,
}) => {
  return (
    <FloatingPopup
      popup={popup}
      options={{
        middleware: [offsetMiddleware(offset), flip(), shift({ padding: 8 })],
        placement,
      }}
      interactions={({ context }) => [
        useHover(context, {
          enabled: !isMobile,
          handleClose: safePolygon({ requireIntent: true }),
          mouseOnly: true,
          move: true,
        }),
        useClick(context),
      ]}
    >
      {children}
    </FloatingPopup>
  );
};
