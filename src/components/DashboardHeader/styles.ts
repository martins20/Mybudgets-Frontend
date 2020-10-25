import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  margin-bottom: 10px;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;

  > img {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  > b {
    font: 300 2rem Roboto;
    color: var(--pink);

    margin: 0 10px;
    cursor: default;
  }

  > svg {
    cursor: pointer;
  }

  transition: opacity 0.2s;

  @media (min-width: 1100px) {
    opacity: 0;
  }
`;
