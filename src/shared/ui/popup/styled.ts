import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography';

export const PopupContainer = styled.div`
  padding: 8px 12px;
  border-radius: 6px;
  width: 254px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid rgba(232, 235, 240, 0);
  background: #fff;
  box-shadow:
    0 1px 2px 0 rgba(153, 161, 176, 0.16),
    0 0 0 1px rgba(17, 38, 66, 0.08);
  backdrop-filter: blur(6px);

  ${MainText} {
    padding: 8px 0;
    cursor: pointer;
    color: ${color('textLabel')};
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
