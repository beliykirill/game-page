import Link from 'next/link';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { color, media } from 'shared/lib/themes';

export const Layout = styled.header`
  height: 56px;
  width: 100%;
  border-bottom: 1px solid ${color('surfaceBorder')};
  background: ${color('surfaceMain')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1128px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.laptop} {
    padding: 0 16px;
  }

  ${media.mobile} {
    padding: 0 12px;
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  ${media.tablet} {
    gap: 16px;
  }

  .input-container {
    max-width: 384px;
    width: 100%;
  }
`;

export const BurgerButton = styled.button.attrs({ type: 'button' })<{
  $isOpen: boolean;
}>`
  display: none;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${ifProp('$isOpen', color('surfaceBackground'), 'transparent')};
  transition: background 0.2s ease-in-out;
  color: ${color('textPrimary')};

  &:focus-visible {
    outline: 2px solid ${color('surfaceBrand')};
    outline-offset: 2px;
  }

  @media (hover: hover) {
    &:hover {
      background: ${color('surfaceBackground')};
    }
  }

  ${media.tablet} {
    display: flex;
  }
`;

export const Logo = styled(Link)`
  width: 118px;
  height: 24px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
  }
`;

export const InformationContainer = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;

  ${media.tablet} {
    position: absolute;
    top: calc(100% + 8px);
    right: 16px;
    z-index: 1000;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid ${color('surfaceBorder')};
    background: ${color('surfaceMain')};
    box-shadow: 0 16px 32px -12px rgba(14, 18, 27, 0.16);
    display: ${ifProp('$isOpen', 'flex', 'none')};
  }

  ${media.mobile} {
    right: 12px;
    left: 12px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.tablet} {
    justify-content: stretch;

    a {
      flex: 1;
    }

    button {
      width: 100%;
    }
  }
`;

export const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;
