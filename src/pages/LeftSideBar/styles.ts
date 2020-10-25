import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 300px;
    max-width: 300px;

    padding: 20px 10px;

    background: var(--pink);
    color: var(--white);

    border-radius: 10px 0 0 10px;
  }
`;
