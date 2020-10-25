import React, { useEffect, useState } from "react";

import DashboardContainer from "../../components/DashboardContainer";
import LeftSideBar from "../../components/LeftSideBar";
import IBudgetDTO from "../../dtos/IBudgetDTO";

import { Container, Main } from "./styles";

const Dashboard: React.FC = () => {
  const [budgets, setBudgets] = useState<IBudgetDTO[]>([]);

  // Make Request
  useEffect(() => {}, []);

  return (
    <Container>
      <Main>
        <LeftSideBar />
        <DashboardContainer budgets={budgets} />
      </Main>
    </Container>
  );
};

export default Dashboard;
