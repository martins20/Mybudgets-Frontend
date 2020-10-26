import React, { useCallback, useEffect, useState } from "react";

import DashboardContainer from "../../components/DashboardContainer";
import LeftSideBar from "../../components/LeftSideBar";

import api from "../../services/api";
import { Container, Main, Loading } from "./styles";
import { useBudgets } from "../../hooks/budgets";
import IBudgetDTO from "../../dtos/IBudgetDTO";

const Dashboard: React.FC = () => {
  const { budgets, handleSetInitialBudgets } = useBudgets();
  const [loading, setLoading] = useState(true);

  const handleGetBudgets = useCallback(async () => {
    const { data: budgets } = await api.get<IBudgetDTO[]>("budgets");

    console.log(budgets);

    handleSetInitialBudgets(budgets);
  }, [handleSetInitialBudgets]);

  useEffect(() => {
    setLoading(true);
    handleGetBudgets();
    setLoading(false);
  }, [handleGetBudgets]);

  return (
    <Container>
      <Main>
        {loading ? (
          <Loading color="#d585ff" type="bubbles" />
        ) : (
          <>
            <LeftSideBar />
            <DashboardContainer budgets={budgets} />
          </>
        )}
      </Main>
    </Container>
  );
};

export default Dashboard;
