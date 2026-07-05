import styled from 'styled-components';
import { color } from 'shared/lib/themes';
import { MainText, secondaryTextStyle } from 'shared/ui/typography';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  & > ${MainText} {
    color: ${color('textLabel')};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${color('surfaceBorder')};
  background: ${color('surfaceMain')};
`;

export const TextArea = styled.textarea`
  ${secondaryTextStyle};
  font-weight: 400;
  color: ${color('textPrimary')};

  width: 100%;
  min-height: 72px;
  background-color: transparent;
  border: none;
  outline: none;
  resize: vertical;

  &::-webkit-resizer {
    display: none;
  }

  &::placeholder {
    color: ${color('textPlaceholder')};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`;

export const Counter = styled.span`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  color: ${color('textPlaceholder')};
`;

export const ResizeIcon = styled.svg`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: ${color('textPlaceholder')};
`;
