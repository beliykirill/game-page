import styled, { css } from 'styled-components';
import { color } from 'shared/lib/themes';

export const mainTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${color('textMain')};
`;

export const MainText = styled.p`
  ${mainTextStyle}
`;
