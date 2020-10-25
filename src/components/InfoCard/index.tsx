import React, { useCallback } from "react";

import { Container } from "./styles";

interface InforCardProps {
  quantity: number;
  type: "Budget" | "Total price";
}

const InfoCard: React.FC<InforCardProps> = ({ quantity, type }) => {
  const handleParseValue = useCallback(
    (value: number) => {
      if (type === "Budget") return value < 10 ? `0${value}` : value;

      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    [quantity]
  );

  return (
    <Container type={type}>
      <h2>{handleParseValue(quantity)}</h2>
      <b>{type}</b>
    </Container>
  );
};

export default InfoCard;
