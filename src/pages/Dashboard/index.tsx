import React from "react";

import DashboardConatiner from "../../components/DashboardContainer";
import LeftSideBar from "../../components/LeftSideBar";

import { Container, Main } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSideBar />
        <DashboardConatiner />
      </Main>
    </Container>
  );
};

export default Dashboard;
