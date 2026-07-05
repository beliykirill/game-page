import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography/main-text';

const itemStyle = css`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: ${color('textLabel')};
  transition:
    background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:focus-visible {
    outline: none;
    background: ${color('surfaceBackground')};
    color: ${color('textPrimary')};
    box-shadow: 0 0 0 2px ${color('surfaceBrand')};
  }

  @media (hover: hover) {
    &:hover {
      background: ${color('surfaceBackground')};
      color: ${color('textPrimary')};
    }
  }
`;

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

  a {
    ${itemStyle}
  }

  ${MainText} {
    color: ${color('textLabel')};
    transition: color 0.2s ease-in-out;
  }

  a:hover ${MainText}, a:focus-visible ${MainText} {
    color: ${color('textPrimary')};
  }
`;

export const PopupItem = styled.button.attrs({ type: 'button' })`
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  font: inherit;

  ${itemStyle}
`;

export const LabelContainer = styled.button.attrs({ type: 'button' })<{
  $isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  font: inherit;

  ${MainText} {
    color: ${color('textLabel')};
  }

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: 0.2s ease-in-out;
  }

  &:focus-visible {
    outline: 2px solid ${color('surfaceBrand')};
    outline-offset: 2px;
    border-radius: 4px;
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
