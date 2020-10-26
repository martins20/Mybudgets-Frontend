import React from "react";

import { AuthProvider } from "./auth";
import { BudgetsProvider } from "./budgets";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <BudgetsProvider>{children}</BudgetsProvider>
  </AuthProvider>
);

export default AppProvider;
