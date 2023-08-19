import { useTheme } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { isLogged } = useAuth();

  const { COLORS } = useTheme();

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
        {isLogged ? <AppRoutes /> : <AuthRoutes />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
