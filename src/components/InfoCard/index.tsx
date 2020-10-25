import React, { useCallback } from "react";

import handleParseValueToCurrencyType from "../../utils/handleParseValueToCurrencyType";

import { Container } from "./styles";

interface InforCardProps {
  quantity: number;
  type: "Budget" | "Total price";
}

const InfoCard: React.FC<InforCardProps> = ({ quantity, type }) => {
  const handleParseValue = useCallback(
    (value: number) => {
      return value < 10 ? `0${value}` : value;
    },
    [quantity]
  );

  return (
    <Container type={type}>
      <div />
      <h2>
        {type === "Budget"
          ? handleParseValue(quantity)
          : handleParseValueToCurrencyType(quantity)}
      </h2>
      <b>{type}</b>
    </Container>
  );
};

export default InfoCard;
