import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
  padding: 20px 30px;

  border-radius: 0 10px 10px 0;
`;

export const Header = styled.header`
  display: flex;

  width: 100%;

  flex-direction: column;
  margin-top: 20px;

  > h2 {
    color: var(--light-gray);
    font-size: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 20px;
  }

  @media (min-width: 700px) {
    margin-top: 0;

    > h2 {
      font-size: 3rem;
    }

    > div {
      justify-content: space-evenly;
      flex-direction: row;
    }
  }
`;

export const Main = styled.main``;
