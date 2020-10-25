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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  > img {
    width: 120px;
    height: 120px;

    border-radius: 50%;
    margin: 30px 0;
  }

  > b {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  > small {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;

  padding: 0 20px;
  margin-top: 30px;
`;

export const ModalsActionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;

  > small {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 15px;
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
    transform: translateY(-3px);
    > svg {
      color: var(--light-red);
    }

    > b {
      color: var(--light-red);
    }
  }

  > svg {
    font-size: 2rem;
    color: var(--light-gray);
  }

  > b {
    margin-left: 10px;
    font-size: 2rem;
    font-weight: 500;
    color: var(--light-gray);
  }
`;
