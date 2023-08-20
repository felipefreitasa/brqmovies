import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Home } from "@screens/Home";
import { FavoriteMovies } from "@screens/FavoriteMovies";

import { useAuth } from "@hooks/useAuth";

import { theme } from "@theme/index";

import { AppBar } from "@components/AppBar";
import { View } from "react-native";

export function MoviesTabs() {
  const { Screen, Navigator } = createMaterialTopTabNavigator();

  const { setIsLogoutDropdownVisible, isLogoutDropdownVisible, setIsLogged } =
    useAuth();

  function handleLogoutDropdownVisibility() {
    setIsLogoutDropdownVisible(isLogoutDropdownVisible ? false : true);
  }

  function handleLogout() {
    setIsLogoutDropdownVisible(false);
    setIsLogged(false);
  }

  return (
    <>
      <AppBar
        title="BRQ Movies"
        onLogout={handleLogout}
        isLogoutDropdownOpen={isLogoutDropdownVisible}
        onClickMoreButton={handleLogoutDropdownVisibility}
      />

      <View style={{ zIndex: 0, flex: 1 }}>
        <Navigator
          screenOptions={{
            tabBarInactiveTintColor: theme.COLORS.GRAY,
            tabBarActiveTintColor: theme.COLORS.PRIMARY,
            tabBarStyle: { backgroundColor: theme.COLORS.BACKGROUND },
            tabBarLabelStyle: { fontSize: 12, fontFamily: theme.FONTS.BOLD },
            tabBarIndicatorStyle: { backgroundColor: theme.COLORS.PRIMARY },
          }}
        >
          <Screen name="Todos os filmes" component={Home} />

          <Screen name="Filmes Favoritos" component={FavoriteMovies} />
        </Navigator>
      </View>
    </>
  );
}
