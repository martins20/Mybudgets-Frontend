import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  top: 0;

  background: rgba(0, 0, 0, 0.3);
  z-index: 5;

  border-radius: 10px;

  @media (min-width: 1100px) {
    border-radius: 0 10px 10px 0;
  }
`;

export const Modal = styled.main`
  background: #f0d4ff;

  width: 90%;
  max-width: 700px;

  border-radius: 10px;
  padding: 20px;

  > h3 {
    margin-bottom: 20px;
    color: var(--purple);
  }

  footer {
    margin-top: 10px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const CancelButton = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 5px;

  font-weight: bold;
  color: var(--white);
  background: var(--light-red);
`;

export const CreateButton = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 5px;

  font-weight: bold;
  color: var(--white);
  background: var(--purple);
`;
