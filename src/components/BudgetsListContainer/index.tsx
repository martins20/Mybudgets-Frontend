import React from "react";

import Budget from "../Budget";

import { Container } from "./styles";

const BudgetsListContainer: React.FC = () => {
  return (
    <Container>
      <Budget
        budget_price={1000000}
        designer_quantity={1}
        dev_quantity={1}
        name="Tinbeer"
        min_day={20}
        po_quantity={10}
        sm_quantity={10}
      />
    </Container>
  );
};

export default BudgetsListContainer;
