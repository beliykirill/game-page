import Image from 'next/image';
import styled from 'styled-components';
import { color, media } from 'shared/lib/themes';
import { HeadlineText, MainText } from 'shared/ui/typography';

export const Layout = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;

  ${media.mobile} {
    padding: 16px 12px;
  }
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 40px 64px;
  border-radius: 16px;
  border: 1px solid #e8ebf0;
  background: #fff;
  max-width: 1256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.tablet} {
    padding: 32px 24px;
    gap: 32px;
  }

  ${media.mobile} {
    padding: 20px 16px;
    gap: 24px;
    border-radius: 12px;
  }
`;

export const Section = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  border-bottom: 1px solid ${color('surfaceBorder')};
  padding-bottom: 24px;
  max-width: 680px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${HeadlineText} {
    color: ${color('textPrimary')};
  }

  ${MainText} {
    color: ${color('textLabel')};
  }
`;

export const BackgroundIcon = styled(Image)`
  width: 450px;
  height: 450px;
  top: -36px;
  right: -32px;
  position: absolute;
  z-index: 0;
  pointer-events: none;

  ${media.tablet} {
    display: none;
  }

  ${media.mobile} {
    display: none;
  }
`;
