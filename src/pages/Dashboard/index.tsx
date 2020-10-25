import React, { useEffect, useState } from "react";

import DashboardContainer from "../../components/DashboardContainer";
import LeftSideBar from "../../components/LeftSideBar";

import { Container, Main } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSideBar />
        <DashboardContainer budgets={[]} />
      </Main>
    </Container>
  );
};

export default Dashboard;
