import styled from 'styled-components';
import { color, media } from 'shared/lib/themes';
import { SectionText } from 'shared/ui/typography';

export const Layout = styled.div`
  position: relative;
  width: 488px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${color('surfaceBorder')};
  background: ${color('surfaceMain')};
  box-shadow: 0 16px 32px -12px rgba(14, 18, 27, 0.02);
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > ${SectionText} {
    color: ${color('textPrimary')};
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const CloseBlock = styled.button.attrs({ type: 'button' })`
  position: absolute;
  right: -64px;
  top: 0;
  cursor: pointer;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${color('surfaceBorder')};
  background: ${color('surfaceMain')};
  box-shadow: 0 16px 32px -12px rgba(14, 18, 27, 0.02);

  & > img {
    width: 24px;
    height: 24px;
    opacity: 0.4;
    flex-shrink: 0;
    transition: 0.2s ease-in-out;
  }

  &:focus-visible {
    outline: 2px solid ${color('surfaceBrand')};
    outline-offset: 2px;
  }

  @media (hover: hover) {
    &:hover {
      & > img {
        opacity: 1;
      }
    }
  }

  ${media.mobile} {
    right: 0;
    top: 0;
    border: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 8px;
`;
