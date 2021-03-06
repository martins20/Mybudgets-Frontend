import styled from "styled-components";

interface DropDownItemsProps {
  isToggled: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  position: relative;

  margin-bottom: 10px;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;

  > img {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  > b {
    font: 300 2rem Roboto;
    color: var(--pink);

    margin: 0 10px;
    cursor: default;
  }

  > svg {
    cursor: pointer;
  }

  transition: opacity 0.2s;

  @media (min-width: 1100px) {
    opacity: 0;
  }
`;

export const DropDownItems = styled.div<DropDownItemsProps>`
  position: absolute;

  display: ${(props) => (props.isToggled ? "block" : "none")};

  bottom: -45px;

  z-index: 4;

  background: var(--light-pink);

  padding: 10px;
  border-radius: 3px;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const SignOut = styled.footer`
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  > svg {
    font-size: 2rem;
    color: var(--white);
  }

  > b {
    margin-left: 10px;
    font-size: 2rem;
    font-weight: 500;
    color: var(--white);
  }
`;
