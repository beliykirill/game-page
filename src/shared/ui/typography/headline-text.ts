import styled, { css } from 'styled-components';
import { color } from 'shared/lib/themes';

export const headlineTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${color('textMain')};
`;

export const HeadlineText = styled.h1`
  ${headlineTextStyle}
`;
