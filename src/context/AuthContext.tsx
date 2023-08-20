import { ReactNode, createContext, useState } from "react";

export type AuthContextDataProps = {
  isLogged: boolean;
  isLogoutDropdownVisible: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogoutDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogoutDropdownVisible, setIsLogoutDropdownVisible] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        isLogoutDropdownVisible,
        setIsLogoutDropdownVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
