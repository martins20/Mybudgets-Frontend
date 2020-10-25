import styled, { css } from "styled-components";

interface ContainerProps {
  type: "Budget" | "Total price";
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 10px 30px;
  width: 100%;
  min-width: 110px;

  border-radius: 5px;

  & + div {
    margin-top: 10px;
  }

  > h2 {
    font-size: 2rem;
  }

  > b {
    font-size: 1.5rem;
  }

  color: var(--white);

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

    & + div {
      margin-top: 0;
      margin-left: 10px;
    }

    max-width: 400px;
  }
`;
