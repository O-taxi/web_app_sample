import React, { createContext, useContext, ReactNode } from "react";
import { useMsal } from "@azure/msal-react";
import { AccountInfo } from "@azure/msal-browser";

type AuthContextType = {
  getUser: () => AccountInfo | null;
};

const AuthContext = createContext<AuthContextType>({
  getUser: () => null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { accounts } = useMsal();

  const getUser = (): AccountInfo | null => {
    return accounts && accounts.length > 0 ? accounts[0] : null;
  };

  return (
    <AuthContext.Provider value={{ getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);