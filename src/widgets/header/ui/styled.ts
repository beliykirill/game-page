import Link from 'next/link';
import styled from 'styled-components';
import { color } from 'shared/lib/themes';

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
  max-width: 1128px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  .input-container {
    max-width: 384px;
    width: 100%;
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

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
