import React from "react";

import DashboardHeader from "../DashboardHeader";
import InfoCard from "../InfoCard";

import { Container, Header } from "./styles";

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
    </Container>
  );
};

export default DashboardContainer;
