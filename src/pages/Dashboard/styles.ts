import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  padding: 10px;

  @media (min-width: 700px) {
    padding: 60px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;

  height: 100%;

  border-radius: 10px;

  background: var(--background);
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.1);
`;
