import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export const DotsLoader: FC = () => (
  <Container aria-hidden="true">
    <span />
    <span />
    <span />
  </Container>
);

const bounce = keyframes`
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }

  40% {
    transform: translateY(-4px);
    opacity: 1;
  }
`;

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  span {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: currentColor;
    animation: ${bounce} 0.6s infinite ease-in-out;
  }

  span:nth-child(2) {
    animation-delay: 0.15s;
  }

  span:nth-child(3) {
    animation-delay: 0.3s;
  }
`;
