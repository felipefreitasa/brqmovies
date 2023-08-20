import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";

import { theme } from "@theme/index";

import { Routes } from "@routes/index";

import { AuthContextProvider } from "@context/AuthContext";
import { MoviesContextProvider } from "@context/MoviesContext";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <MoviesContextProvider>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
          />

          {fontsLoaded ? <Routes /> : <Loading />}
        </ThemeProvider>
      </AuthContextProvider>
    </MoviesContextProvider>
  );
}
