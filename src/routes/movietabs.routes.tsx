import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Home } from "@screens/Home";
import { FavoriteMovies } from "@screens/FavoriteMovies";

import { AppBar } from "@components/AppBar";

import { theme } from "@theme/index";

export function MoviesTabs() {
  const { Screen, Navigator } = createMaterialTopTabNavigator();

  return (
    <>
      <AppBar />

      <Navigator
        screenOptions={{
          tabBarInactiveTintColor: theme.COLORS.GRAY,
          tabBarActiveTintColor: theme.COLORS.PRIMARY,
          tabBarStyle: { backgroundColor: theme.COLORS.BACKGROUND },
          tabBarLabelStyle: { fontSize: 12, fontFamily: theme.FONTS.BOLD },
          tabBarIndicatorStyle: { backgroundColor: theme.COLORS.PRIMARY },
        }}
      >
        <Screen 
          name="Todos os filmes" 
          component={Home}
        />

        <Screen 
          name="Filmes Favoritos" 
          component={FavoriteMovies}
        />
      </Navigator>
    </>
  );
}
