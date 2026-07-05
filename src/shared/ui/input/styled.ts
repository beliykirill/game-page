import styled from 'styled-components';
import { color } from 'shared/lib/themes';
import { mainTextStyle } from 'shared/ui/typography';

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 12px;
  height: 32px;
  position: relative;
  transition: 0.2s ease-in-out;
  border-radius: 6px;
  border: 1px solid rgba(232, 235, 240, 0);
  background: ${color('surfaceMain')};
  box-shadow:
    0 1px 2px 0 rgba(153, 161, 176, 0.16),
    0 0 0 1px rgba(17, 38, 66, 0.08);
  backdrop-filter: blur(6px);
`;

export const TextInput = styled.input`
  ${mainTextStyle};
  color: ${color('textPrimary')};

  width: 100%;
  background-color: transparent;
  border: none;
  z-index: 3;

  &::placeholder {
    color: ${color('textPlaceholder')};
  }
`;
