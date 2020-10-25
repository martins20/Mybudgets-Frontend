import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  align-self: flex-start;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    transform: translateX(5px);

    > svg {
      color: var(--light-pink);
    }
  }

  > svg {
    margin-right: 10px;
  }

  > p {
    font-size: 2rem;
    font-weight: 300;
  }

  & + div {
    margin-top: 10px;
  }
`;
