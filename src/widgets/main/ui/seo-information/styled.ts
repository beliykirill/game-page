import styled from 'styled-components';
import { color } from 'shared/lib/themes';
import { mainTextStyle, SecondaryText } from 'shared/ui/typography';

export const InformationText = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 24px;
  width: 100%;
  border-top: 1px solid ${color('surfaceBorder')};

  ${mainTextStyle};
  white-space: pre-wrap;
  color: ${color('textLabel')};

  ${SecondaryText} {
    color: ${color('textLabel')};
  }
`;

export const InfoList = styled.ul`
  margin: 12px 0;
  padding-left: 24px;
  list-style: disc;

  li {
    white-space: normal;
  }

  li + li {
    margin-top: 8px;
  }
`;
