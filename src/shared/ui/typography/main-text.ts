import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { color } from 'shared/lib/themes';
import { TextTheme } from 'shared/types/theme';

export const mainTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${color('textMain')};

  ${switchProp('$textTheme', {
    light: css`
      font-weight: 300;
    `,
    regular: css`
      font-weight: 400;
    `,
    medium: css`
      font-weight: 500;
    `,
    semi: css`
      font-weight: 600;
    `,
    bold: css`
      font-weight: 700;
    `,
  })};
`;

export const MainText = styled.p<{ $textTheme?: TextTheme }>`
  ${mainTextStyle}
`;
