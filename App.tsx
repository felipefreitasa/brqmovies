import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { Routes } from "./src/routes";

import { AuthContextProvider } from "@context/AuthContext";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
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
  );
}
