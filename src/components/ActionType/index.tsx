import React from "react";
import { IconType } from "react-icons";

import { Container } from "./styles";

interface ActionTypeProps {
  name: string;
  icon: IconType;
}

const ActionType: React.FC<ActionTypeProps> = ({ name, icon: Icon }) => {
  return (
    <Container>
      <Icon />
      <p>{name}</p>
    </Container>
  );
};

export default ActionType;
