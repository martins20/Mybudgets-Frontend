import React from "react";

import DashboardConatiner from "../DashboardContainer";
import LeftSideBar from "../LeftSideBar";

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
