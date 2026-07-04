import styled, { css } from 'styled-components';
import { color } from 'shared/lib/themes';

export const secondaryTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${color('textMain')};
`;

export const SecondaryText = styled.p`
  ${secondaryTextStyle};
`;
