import React, { useCallback, useState } from "react";

import { NewIcon } from "../../styles/icons";

import IBudgetDTO from "../../dtos/IBudgetDTO";
import BudgetsListContainer from "../BudgetsListContainer";

import DashboardHeader from "../DashboardHeader";
import InfoCard from "../InfoCard";

import { Container, Header, Main } from "./styles";
import NewBudget from "../NewBudget";

interface DashboardContainerProps {
  budgets: IBudgetDTO[];
}

const DashboardContainer: React.FC<DashboardContainerProps> = ({ budgets }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSumTotalOfBudgetPrice = useCallback(() => {
    const totalPrice = budgets?.reduce(
      (accumulator, budget) => accumulator + budget.budget_price,
      0
    );

    return totalPrice;
  }, [budgets]);

  return (
    <Container>
      <DashboardHeader isDropdownToggled={false} />

      <Header>
        <h2>Dashboard</h2>

        <div>
          <InfoCard quantity={budgets.length} type="Budget" />
          <InfoCard
            quantity={handleSumTotalOfBudgetPrice() || 0}
            type="Total price"
          />
        </div>
      </Header>

      <Main>
        <header>
          <h2>My budgets</h2>

          <button type="button" onClick={() => setIsVisible(true)}>
            <NewIcon /> New budget
          </button>
        </header>

        <BudgetsListContainer budgets={budgets} />
      </Main>

      <NewBudget isVisible={isVisible} setIsVisible={setIsVisible} />
    </Container>
  );
};

export default DashboardContainer;
