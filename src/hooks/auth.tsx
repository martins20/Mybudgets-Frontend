import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
  user: UserState;
}

interface UserState {
  id: string;
  first_name: string;
  second_name: string;
  cpf: string;
  email: string;
  phone: string;
  cnpj: string;
  company_name: string;
  cep: string;
  address: string;
  number: number;
  complement: string;
  state: string;
  city: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserState;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@MyBudgets:token");
    const user = localStorage.getItem("@MyBudgets:user");

    if (token && user) {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const {
      data: { token, user },
    } = await api.post<AuthState>("sessions", {
      email,
      password,
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    localStorage.setItem("@MyBudgets:token", token);
    localStorage.setItem("@MyBudgets:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@MyBudgets:token");
    localStorage.removeItem("@MyBudgets:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
