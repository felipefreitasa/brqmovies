import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";

import { theme } from "@theme/index";

import { Routes } from "@routes/index";

import { AuthContextProvider } from "@context/AuthContext";
import { MoviesContextProvider } from "@context/MoviesContext";

import { Loading } from "@components/Loading";
import { ErrorCard } from "@components/ErrorCard";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <MoviesContextProvider>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
          />

          {isConnected ? (
            <Routes />
          ) : (
            <ErrorCard
              icon="wifi-off"
              title="Sem conexão com a internet"
              subtitle="Você precisa de acesso à internet para continuar usando o BRQ Movies"
            />
          )}
        </ThemeProvider>
      </AuthContextProvider>
    </MoviesContextProvider>
  );
}
