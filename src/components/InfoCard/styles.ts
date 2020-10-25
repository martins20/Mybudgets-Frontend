import styled, { css } from "styled-components";

interface ContainerProps {
  type: "Budget" | "Total price";
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  overflow: hidden;

  flex-direction: column;
  cursor: default;

  align-items: center;
  justify-content: center;

  padding: 10px 30px;
  width: 100%;
  min-width: 110px;

  border-radius: 5px;

  > div {
    width: 100%;
    height: 100%;

    background: rgba(255, 255, 255, 0.05);
    border-radius: 30%;

    position: absolute;
    top: -30px;
  }

  & + div {
    margin-top: 10px;
  }

  > h2 {
    font-size: 2rem;
    z-index: 2;
  }

  > b {
    font-size: 1.5rem;
    z-index: 2;
  }

  color: var(--white);

  transition: transform 0.5s;

  &:hover {
    transform: translateY(-2px);
  }

  ${(props) =>
    props.type === "Budget"
      ? css`
          background: var(--purple);
        `
      : css`
          background: var(--light-blue);
        `};

  @media (min-width: 700px) {
    padding: 30px;

    > div {
      width: 100%;
      height: 80%;

      border-radius: 50%;

      position: absolute;
      top: -30px;
    }

    & + div {
      margin-top: 0;
      margin-left: 10px;
    }

    max-width: 400px;
  }
`;
