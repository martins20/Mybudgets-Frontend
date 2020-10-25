import React from "react";
import { SadFaceIcon } from "../../styles/icons";
import NewBudgetButton from "../NewBudgetButton";

import { Container, Message } from "./styles";

const NoBudgetMessage: React.FC = () => {
  return (
    <Container>
      <Message>
        <b>
          OOoh! Looks is like you don't have a budget... <SadFaceIcon />
        </b>
        <small>Let's create it!</small>
        <NewBudgetButton />
      </Message>
    </Container>
  );
};

export default NoBudgetMessage;
