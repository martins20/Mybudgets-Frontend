import React from "react";
import IBudgetDTO from "../../dtos/IBudgetDTO";

import Budget from "../Budget";
import NoBudgetMessage from "../NoBudgetMessage";

import { Container } from "./styles";

interface BudgetsListContainerProps {
  budgets: IBudgetDTO[];
}

const BudgetsListContainer: React.FC<BudgetsListContainerProps> = ({
  budgets,
}) => {
  return (
    <Container hasBudget={!!budgets.length}>
      {budgets.length ? (
        budgets.map((budget) => (
          <Budget
            budget_price={budget.budget_price}
            designer_quantity={budget.designer_quantity}
            dev_quantity={budget.dev_quantity}
            name={budget.name}
            min_day={budget.min_day}
            po_quantity={budget.po_quantity}
            sm_quantity={budget.sm_quantity}
          />
        ))
      ) : (
        <NoBudgetMessage />
      )}
    </Container>
  );
};

export default BudgetsListContainer;
