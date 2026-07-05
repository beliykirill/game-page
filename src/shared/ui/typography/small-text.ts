import styled, { css } from 'styled-components';
import { color } from 'shared/lib/themes';

export const smallTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: ${color('textMain')};
`;

export const SmallText = styled.p`
  ${smallTextStyle};
`;
