import styled, { css } from 'styled-components';
import { color } from 'shared/lib/themes';

export const tinyTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.8px;
  color: ${color('textMain')};
`;

export const TinyText = styled.p`
  ${tinyTextStyle};
`;
