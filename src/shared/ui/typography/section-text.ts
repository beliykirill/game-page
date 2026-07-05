import styled, { css } from 'styled-components';
import { color } from 'shared/lib/themes';

export const sectionTextStyle = css`
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: ${color('textMain')};
`;

export const SectionText = styled.h2`
  ${sectionTextStyle};
`;
