import React from "react";
import { NewIcon } from "../../styles/icons";

import { Container } from "./styles";

const NewBudgetButton: React.FC = () => {
  return (
    <Container>
      <NewIcon /> New budget
    </Container>
  );
};

export default NewBudgetButton;
