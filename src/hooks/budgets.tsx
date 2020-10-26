import React, { createContext, useCallback, useContext, useState } from "react";
import IBudgetDTO from "../dtos/IBudgetDTO";

interface BudgetsContextData {
  budgets: IBudgetDTO[];
  handleSetInitialBudgets(budget: IBudgetDTO[]): void;
}

const BudgetsContext = createContext<BudgetsContextData>(
  {} as BudgetsContextData
);

export const BudgetsProvider: React.FC = ({ children }) => {
  const [budgets, setBudgets] = useState<IBudgetDTO[]>([]);

  const handleSetInitialBudgets = useCallback(
    (budget: IBudgetDTO[]) => {
      setBudgets(budgets);
    },
    [budgets]
  );

  return (
    <BudgetsContext.Provider value={{ budgets, handleSetInitialBudgets }}>
      {children}
    </BudgetsContext.Provider>
  );
};

export const useBudgets = (): BudgetsContextData => {
  const context = useContext(BudgetsContext);

  if (!context) {
    throw new Error("useBudgets must be used within an BudgetsProvider");
  }

  return context;
};
