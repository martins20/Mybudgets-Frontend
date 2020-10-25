import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 60px;
      height: 60px;

      border-radius: 50%;
    }
  }

  & + div {
    margin-top: 10px;
    padding-top: 10px;

    border-top: 1px solid var(--light-gray);
  }

  @media (min-width: 800px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-left: 10px;

  > b {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;

export const Professionals = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5px;
  grid-column-gap: 20px;

  > li {
    font-size: 1.2rem;
    color: var(--gray);
  }
`;

export const Days = styled.section`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;

  @media (min-width: 800px) {
    display: flex;
  }
`;

export const Price = styled.section`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;

  @media (min-width: 800px) {
    display: flex;
  }
`;
