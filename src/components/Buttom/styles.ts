import styled from "styled-components";

export const Container = styled.button`
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
`;
