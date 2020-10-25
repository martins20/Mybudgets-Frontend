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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  width: 100%;

  margin-top: 20px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;

    > h2 {
      font-size: 2rem;
      line-height: 2rem;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      padding: 5px 10px;

      border-radius: 5px;
      font-weight: 500;
      color: var(--white);

      background: var(--light-pink);

      > svg {
        margin-right: 5px;
      }

      transition: background 0.3s;

      &:hover {
        background: var(--pink);
      }
    }
  }
`;
