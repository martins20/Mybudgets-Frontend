import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  flex: 1;
  width: 100%;
`;

export const Message = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  > b {
    font-size: 1.5rem;
    color: var(--light-pink);
    text-align: center;
    position: relative;

    > svg {
      position: absolute;
      margin-left: 5px;
      bottom: 0;
    }
  }

  > small {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;
