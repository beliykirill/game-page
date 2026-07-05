import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography/main-text';

export const PopupContainer = styled.div`
  padding: 4px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid rgba(232, 235, 240, 0);
  background: #fff;
  box-shadow: 0 16px 32px -12px rgba(14, 18, 27, 0.1);
  backdrop-filter: blur(6px);

  ${MainText} {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    color: ${color('textLabel')};
    transition:
      background 0.2s ease-in-out,
      color 0.2s ease-in-out;

    @media (hover: hover) {
      &:hover {
        background: ${color('surfaceBackground')};
        color: ${color('textPrimary')};
      }
    }
  }
`;

export const LabelContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  ${MainText} {
    color: ${color('textLabel')};
  }

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: 0.2s ease-in-out;
  }

  ${ifProp(
    '$isOpen',
    css`
      img {
        transform: rotate(180deg);
      }
    `,
  )};
`;
