import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText, secondaryTextStyle } from 'shared/ui/typography';

export const Container = styled.button.attrs({ type: 'button' })<{
  $isOpen: boolean;
}>`
  width: 100%;
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
  background-color: ${color('surfaceMain')};
  border: 1px solid ${color('surfaceBorder')};
  gap: 8px;
  transition:
    border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:active {
    background-color: ${color('surfaceBackground')};
  }

  &:focus-visible {
    outline: 2px solid ${color('surfaceBrand')};
    outline-offset: 2px;
  }

  img {
    width: 16px;
    height: 16px;
    transition: 0.2s ease-in-out;
  }

  ${ifProp(
    '$isOpen',
    css`
      background-color: ${color('surfaceBackground')};
      border-color: #d4d7dd;

      img {
        transform: rotate(180deg);
      }
    `,
  )};

  @media (hover: hover) {
    &:hover {
      border-color: #d4d7dd;
    }
  }
`;

export const Layout = styled.div<{
  $selectSize: 'default' | 'secondary';
  $hasValue: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > ${MainText} {
    color: ${ifProp('$hasValue', color('textLabel'), color('textPlaceholder'))};
  }

  ${Container} {
    & > ${MainText} {
      color: ${ifProp('$hasValue', color('textLabel'), color('textPlaceholder'))};
    }
  }

  ${switchProp('$selectSize', {
    secondary: css`
      ${Container} {
        height: 40px;

        ${MainText} {
          ${secondaryTextStyle};
          font-weight: 400;

          color: ${ifProp('$hasValue', color('textLabel'), color('textPlaceholder'))};
        }
      }
    `,
  })}
`;
