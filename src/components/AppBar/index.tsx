import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "@hooks/useAuth";

import {
  Title,
  Container,
  LogoutButton,
  LogoutButtonTitle,
  LogoutDropdownIconButton,
} from "./styles";

export function AppBar() {

  const { COLORS } = useTheme();

  const { setIsLogoutDropdownVisible, isLogoutDropdownVisible, setIsLogged } = useAuth();

  function handleLogout(){
    setIsLogoutDropdownVisible(false)
    setIsLogged(false)
  }

  return (
    <>
      <Container>
        <Title>BRQ Movies</Title>

        <LogoutDropdownIconButton
          isActive={isLogoutDropdownVisible}
          onPress={() => {
            setIsLogoutDropdownVisible(isLogoutDropdownVisible ? false : true);
          }}
        >
          <MaterialCommunityIcons
            size={24}
            name="dots-vertical"
            color={isLogoutDropdownVisible ? COLORS.BACKGROUND : COLORS.WHITE}
          />
        </LogoutDropdownIconButton>
      </Container>

      {isLogoutDropdownVisible && (
        <LogoutButton onPress={handleLogout}>
          <MaterialIcons
            size={24}
            name="logout"
            color={COLORS.WHITE}
          />

          <LogoutButtonTitle numberOfLines={1}>
            Sair
          </LogoutButtonTitle>
        </LogoutButton>
      )}
    </>
  );
}
