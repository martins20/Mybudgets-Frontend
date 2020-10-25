import styled from "styled-components";

interface ButtonProps {
  hasIcon: boolean;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;

  padding: 5px 10px;

  border: 1px solid var(--white);
  background: var(--white);
  border-radius: 5px;

  font: 300 2rem Roboto;
  color: var(--purple);

  transition: all 0.5s;

  > svg {
    margin-right: 10px;
  }

  &:hover {
    color: var(--white);
    background: var(--purple);
    border-color: var(--withe);
  }
`;
