import Link from 'next/link';
import styled from 'styled-components';
import { color } from 'shared/lib/themes';
import { MainText, SecondaryText } from 'shared/ui';

export const Layout = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding: 32px 0 44px;
  border-top: 1px solid ${color('surfaceBorder')};
  background: ${color('surfaceMain')};
`;

export const Container = styled.div`
  max-width: 1128px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  gap: 88px;
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

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 296px;
  width: 100%;

  ${MainText} {
    color: ${color('textLabel')};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  a ${MainText} {
    transition: color 0.2s ease-in-out;
  }

  a:hover ${MainText} {
    color: ${color('textPrimary')};
  }
`;

export const SupportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${MainText} {
    color: ${color('textLabel')};
  }

  ${SecondaryText} {
    color: ${color('textSecondary')};
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SocialIcon = styled.img`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: drop-shadow(0 1px 2px rgba(153, 161, 176, 0.16))
      drop-shadow(0 4px 8px rgba(17, 38, 66, 0.08));
  }
`;
