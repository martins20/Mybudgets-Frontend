import React from "react";
import { IconType } from "react-icons";

import { Container } from "./styles";

interface LeftSideButtomProps {
  name: string;
  icon?: IconType;
}

const LeftSideButtom: React.FC<LeftSideButtomProps> = ({
  name,
  icon: Icon,
}) => {
  return (
    <Container hasIcon={!!Icon}>
      {Icon && <Icon />}
      {name}
    </Container>
  );
};

export default LeftSideButtom;
