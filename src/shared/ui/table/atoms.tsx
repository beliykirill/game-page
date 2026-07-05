import styled from 'styled-components';

export const CellRightContainer = styled.div`
  display: flex;
  justify-content: end;
  text-align: right;
  width: 100%;
`;

export const CellLeftContainer = styled.div`
  display: flex;
  justify-content: start;
  text-align: left;
  width: 100%;

  button {
    box-shadow: none;
  }
`;
