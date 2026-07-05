import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { mainTextStyle } from 'shared/ui/typography';

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const Container = styled.div<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 12px;
  height: 32px;
  position: relative;
  transition: 0.2s ease-in-out;
  border-radius: 6px;
  border: 1px solid rgba(232, 235, 240, 0);
  background: ${color('surfaceMain')};
  box-shadow:
    0 1px 2px 0 rgba(153, 161, 176, 0.16),
    0 0 0 1px rgba(17, 38, 66, 0.08);
  backdrop-filter: blur(6px);

  &:focus-within {
    border-color: ${color('surfaceBrand')};
    box-shadow:
      0 1px 2px 0 rgba(153, 161, 176, 0.16),
      0 0 0 3px ${(p) => rgba(color('surfaceBrand')(p), 0.18)};
  }

  ${ifProp(
    '$hasError',
    css`
      border-color: ${color('surfaceError')};

      &:focus-within {
        border-color: ${color('surfaceError')};
        box-shadow:
          0 1px 2px 0 rgba(153, 161, 176, 0.16),
          0 0 0 3px ${(p) => rgba(color('surfaceError')(p), 0.18)};
      }
    `,
  )}
`;

export const ErrorText = styled.span`
  ${mainTextStyle};
  font-size: 12px;
  line-height: 16px;
  color: ${color('textError')};
  margin-top: 4px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextInput = styled.input`
  ${mainTextStyle};
  color: ${color('textPrimary')};

  width: 100%;
  background-color: transparent;
  border: none;
  z-index: 3;

  &::placeholder {
    color: ${color('textPlaceholder')};
  }
`;
