import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography';
import type { ButtonSize, ButtonTheme } from './index';

export const Container = styled.button<{
  $buttonTheme: ButtonTheme;
  $buttonSize: ButtonSize;
  $isActive: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.3s,
    box-shadow 0.3s,
    transform 0.1s;

  &:disabled {
    opacity: 0.4;
    cursor: default;
    transform: none;
  }

  ${switchProp('$buttonSize', {
    default: css`
      height: 40px;
      padding: 4px 12px;
      border-radius: 8px;

      ${MainText} {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
    `,
    medium: css`
      height: 36px;
      padding: 8px 12px;
      border-radius: 8px;

      ${MainText} {
        font-size: 14px;
        line-height: 20px;
      }
    `,
    small: css`
      height: 32px;
      padding: 4px 12px;
      border-radius: 6px;

      ${MainText} {
        font-size: 14px;
        line-height: 20px;
      }
    `,
  })}

  ${switchProp('$buttonTheme', {
    default: css`
      background: ${color('surfaceMain')};
      box-shadow:
        0 1px 2px 0 rgba(164, 172, 185, 0.24),
        0 0 0 1px rgba(18, 55, 105, 0.08);

      ${MainText} {
        color: ${color('textPrimary')};
      }

      @media (hover: hover) {
        &:hover:not(:disabled) {
          background: #fafafa;
        }
      }

      &:active:not(:disabled) {
        background: #f2f4f7;
        transform: translateY(1px);
      }
    `,
    primary: css`
      background: #4e75ff;
      box-shadow:
        0 1px 2px 0 rgba(57, 89, 204, 0.5),
        0 0 0 1px #4665d2;

      ${MainText} {
        color: ${color('textMain')};
      }

      @media (hover: hover) {
        &:hover:not(:disabled) {
          background: #274fdc;
        }
      }

      &:active:not(:disabled) {
        background: #1f45c9;
        transform: translateY(1px);
      }
    `,
    secondary: css`
      background: rgba(92, 128, 253, 0.08);

      ${MainText} {
        color: ${color('textBrand')};
      }

      @media (hover: hover) {
        &:hover:not(:disabled) {
          background: rgba(92, 128, 253, 0.2);
        }
      }

      &:active:not(:disabled) {
        background: rgba(92, 128, 253, 0.28);
        transform: translateY(1px);
      }

      ${ifProp(
        '$isActive',
        css`
          background: ${color('surfaceBrand')};

          ${MainText} {
            color: ${color('textMain')};
          }

          @media (hover: hover) {
            &:hover:not(:disabled) {
              background: #4d6fe8;
            }
          }
        `,
      )}
    `,
    tertiary: css`
      background: #30333f;
      box-shadow:
        0 0 0 1px #313131,
        0 1px 2px 0 #1f2126;

      ${MainText} {
        color: ${color('textMain')};
      }

      @media (hover: hover) {
        &:hover:not(:disabled) {
          background: #555862;
        }
      }

      &:active:not(:disabled) {
        background: #26272e;
        transform: translateY(1px);
      }
    `,
  })}
`;
