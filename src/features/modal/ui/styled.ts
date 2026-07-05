import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Layout = styled.div`
  z-index: 1000040;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  transition: 0.4s ease-in-out;
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100svh;
  z-index: -1;
  background: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(2px);
  padding-bottom: env(safe-area-inset-bottom);
`;

export const OverlayContainer = styled.div`
  width: 100vw;
  min-height: 100dvh;
  display: flex;
  z-index: 10000;
`;

export const Content = styled(motion.div)`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const CenteredOverlayContainer = styled.div`
  width: 100vw;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
`;

export const CenteredContent = styled(motion.div)`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
