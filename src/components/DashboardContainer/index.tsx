import React from "react";
import IBudgetDTO from "../../dtos/IBudgetDTO";
import BudgetListContainer from "../BudgetListContainer";

import DashboardHeader from "../DashboardHeader";
import InfoCard from "../InfoCard";
import NewBudgetButton from "../NewBudgetButton";

import { Container, Header, Main } from "./styles";

interface DashboardContainerProps {
  budgets: IBudgetDTO[];
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ budgets }) => {
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

          <NewBudgetButton />
        </header>

        <BudgetListContainer />
      </Main>
    </Container>
  );
};

export default DashboardContainer;
