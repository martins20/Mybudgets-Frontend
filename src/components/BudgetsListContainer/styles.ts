import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(213, 133, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(164, 32, 234, 0.3);

    &:hover {
      background: rgba(164, 32, 234, 0.5);
    }
  }

  border-radius: 10px;

  padding: 8px;
  background: var(--white);

  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
`;
