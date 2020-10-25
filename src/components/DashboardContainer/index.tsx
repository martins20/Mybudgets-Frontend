import React from "react";
import { NewIcon } from "../../styles/icons";
import BudgetsListContainer from "../BudgetsListContainer";

import DashboardHeader from "../DashboardHeader";
import InfoCard from "../InfoCard";

import { Container, Header, Main } from "./styles";

const DashboardContainer: React.FC = () => {
  return (
    <Container>
      <DashboardHeader isDropdownToggled={false} />

      <Header>
        <h2>Dashboard</h2>

        <div>
          <InfoCard quantity={9} type="Budget" />
          <InfoCard quantity={48000} type="Total price" />
        </div>
      </Header>

      <Main>
        <header>
          <h2>My budgets</h2>

          <button>
            <NewIcon /> New budget
          </button>
        </header>

        <BudgetsListContainer />
      </Main>
    </Container>
  );
};

export default DashboardContainer;
