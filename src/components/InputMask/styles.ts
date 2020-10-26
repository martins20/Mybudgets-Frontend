import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--white);
  border-radius: 10px;
  padding: 5px 10px;
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  border: 2px solid var(--white);

  color: #666360;

  & + div {
    margin-top: 25px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: var(--purple);
      border-color: var(--purple);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: var(--purple);
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--gray);

    padding: 5px 0;

    &::placeholder {
      color: #666360;
    }
  }

  > b {
    position: absolute;
    color: red;
    right: 10px;
    top: -20px;

    font-size: 1.2rem;
  }

  svg {
    margin-right: 16px;
  }

  @media (min-width: 700px) {
    & + div {
      margin: 0;
    }
  }
`;
