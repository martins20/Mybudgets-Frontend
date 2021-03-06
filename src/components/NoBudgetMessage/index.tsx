import React from "react";
import { SadFaceIcon } from "../../styles/icons";

import { Container, Message } from "./styles";

const NoBudgetMessage: React.FC = () => {
  return (
    <Container>
      <Message>
        <b>
          OOoh! Looks is like you don't have a budget... <SadFaceIcon />
        </b>
      </Message>
    </Container>
  );
};

export default NoBudgetMessage;
