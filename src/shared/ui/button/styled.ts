import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { MainText } from 'shared/ui/typography';

export const Container = styled.div<{ $buttonTheme: 'default' | 'secondary' }>`
  border-radius: 6px;
  height: 32px;
  padding: 0 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(193, 199, 208, 0.02) 100%
    ),
    #fff;
  box-shadow:
    0 1px 2px 0 rgba(164, 172, 185, 0.24),
    0 0 0 1px rgba(18, 55, 105, 0.08);

  ${MainText} {
    color: ${color('textPrimary')};
  }

  ${switchProp('$buttonTheme', {
    secondary: css`
      border: 1px solid rgba(255, 255, 255, 0.12);
      background:
        linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(193, 199, 208, 0.02) 100%
        ),
        #4e75ff;
      box-shadow:
        0 1px 2px 0 rgba(57, 89, 204, 0.5),
        0 0 0 1px #4665d2;

      ${MainText} {
        color: ${color('textMain')};
      }
    `,
  })}
`;
