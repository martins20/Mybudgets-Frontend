import React from "react";
import { IconType } from "react-icons";

import { Container } from "./styles";

interface ButtonProps {
  name: string;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ name, icon: Icon }) => {
  return (
    <Container hasIcon={!!Icon}>
      {Icon && <Icon />}
      {name}
    </Container>
  );
};

export default Button;
