import React, { ButtonHTMLAttributes } from "react";
import Loading from "react-loading";

import { Container } from "./styles";

interface ButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  name: string;
}

const Buttom: React.FC<ButtomProps> = ({ loading, name, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <Loading color="#d585ff" type="bubbles" width={20} height={20} />
      ) : (
        <b>{name}</b>
      )}
    </Container>
  );
};

export default Buttom;
