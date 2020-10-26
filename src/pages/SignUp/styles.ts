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
  flex-direction: column;
  align-items: center;
  flex: 1;

  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(213, 133, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(164, 32, 234, 0.3);

    &:hover {
      background: rgba(164, 32, 234, 0.5);
    }
  }

  border-radius: 10px;

  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.1);
  background: var(--light-pink);
  padding: 60px 20px 20px 20px;

  > h3 {
    color: var(--white);
    font-weight: 700;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  > b {
    margin-bottom: 10px;

    font-size: 1.5rem;
    color: var(--white);
  }

  & + section {
    margin-top: 20px;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  @media (min-width: 700px) {
    display: grid;
    width: 100%;

    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    grid-column-gap: 20px;

    > div {
      margin: 0;
    }
  }
`;

export const Form = styled(UnformFormComponent)`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;

  width: 100%;

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
  }
`;
