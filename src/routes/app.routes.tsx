import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { MovieDetails } from "@screens/MovieDetails";

import { MoviesTabs } from "@routes/movietabs.routes";

type AppRoutesTypeProps = {
  home: undefined;
  movieDetails: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesTypeProps>;

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypeProps>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Screen
        name="home"
        component={MoviesTabs}
        options={{ gestureEnabled: false }}
      />

      <Screen 
        name="movieDetails" 
        component={MovieDetails}
       />
    </Navigator>
  );
}
