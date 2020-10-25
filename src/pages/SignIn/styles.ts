import styled from "styled-components";
import { Form as UnformFormComponent } from "@unform/web";

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

  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.1);
`;

export const LeftSide = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  /* min-width: 700px; */
  background: var(--light-pink);

  > h3 {
    color: var(--white);

    margin-bottom: 50px;
  }

  border-radius: 10px;

  @media (min-width: 700px) {
    border-radius: 10px 0 0 10px;
  }
`;

export const Form = styled(UnformFormComponent)`
  display: flex;
  flex-direction: column;

  width: 60%;

  align-self: center;

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 10px;

    > b {
      font-size: 1.5rem;
      color: var(--white);
      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        transform: translateY(-3px);

        color: var(--pink);
      }
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px 20px;

      border: 0;
      background: var(--white);
      color: var(--pink);
      font-weight: 500;

      border-radius: 5px;

      transition: all 0.3s;

      &:hover {
        transform: translateY(-3px);

        background: var(--pink);
        color: var(--white);
      }
    }
  }
`;

export const RightSide = styled.section`
  display: none;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
  background: var(--pink);

  @media (min-width: 700px) {
    display: flex;

    border-radius: 0 10px 10px 0;
  }
`;
