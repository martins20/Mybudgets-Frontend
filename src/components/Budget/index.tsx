import React from "react";

import handleParseValueToCurrencyType from "../../utils/handleParseValueToCurrencyType";

import { Container, Section, Professionals, Days, Price } from "./styles";

interface BudgetProps {
  name: string;
  dev_quantity: number;
  designer_quantity: number;
  po_quantity: number;
  sm_quantity: number;
  min_day: number;
  budget_price: number;
}

const Budget: React.FC<BudgetProps> = ({
  name,
  dev_quantity,
  designer_quantity,
  po_quantity,
  sm_quantity,
  min_day,
  budget_price,
}) => {
  return (
    <Container>
      <div>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="Budget"
        />

        <Section>
          <b>{name}</b>

          <Professionals>
            <li>{dev_quantity} Fullstack Developer(s)</li>
            <li>{designer_quantity} Designer(s)</li>
            <li>{po_quantity} Product owner(s)</li>
            <li>{sm_quantity} Scrum master(s)</li>
          </Professionals>
        </Section>
      </div>

      <Days>
        <b>Total days</b>

        <p>{min_day}</p>
      </Days>

      <Price>
        <b>Price</b>

        <p>{handleParseValueToCurrencyType(budget_price)}</p>
      </Price>
    </Container>
  );
};

export default Budget;
