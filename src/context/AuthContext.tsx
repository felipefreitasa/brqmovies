import { ReactNode, createContext, useState } from "react";

export type AuthContextDataProps = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
