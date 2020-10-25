import styled from "styled-components";

export const Container = styled.button`
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
`;
