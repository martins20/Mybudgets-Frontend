import React, { createContext, useCallback, useContext, useState } from "react";
import IBudgetDTO from "../dtos/IBudgetDTO";

interface BudgetsContextData {
  budgets: IBudgetDTO[];
  handleSetInitialBudgets(budgets: IBudgetDTO[]): void;
  handleAddNewBudget(budget: IBudgetDTO): void;
}

const BudgetsContext = createContext<BudgetsContextData>(
  {} as BudgetsContextData
);

export const BudgetsProvider: React.FC = ({ children }) => {
  const [budgets, setBudgets] = useState<IBudgetDTO[]>([]);

  const handleSetInitialBudgets = useCallback((budgets: IBudgetDTO[]) => {
    setBudgets(budgets);
  }, []);

  const handleAddNewBudget = useCallback(
    (budget: IBudgetDTO) => {
      setBudgets([...budgets, budget]);
    },
    [budgets]
  );

  return (
    <BudgetsContext.Provider
      value={{ budgets, handleSetInitialBudgets, handleAddNewBudget }}
    >
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
