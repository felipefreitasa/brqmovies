import { useTheme } from "styled-components/native";

import { IconButton } from "@components/IconButton";
import { LogoutButton } from "@components/LogoutButton";

import { Title, Container } from "./styles";

type Props = {
  title: string;
  onLogout: () => void;
  onClickMoreButton: () => void;
  isLogoutDropdownOpen: boolean;
};

export function AppBar({
  title,
  onLogout,
  onClickMoreButton,
  isLogoutDropdownOpen,
}: Props) {
  
  const { COLORS } = useTheme();

  return (
    <>
      <Container testID="app-bar">
        <Title>{title}</Title>

        <IconButton
          icon="more-vert"
          iconColor={COLORS.WHITE}
          onPress={onClickMoreButton}
          testID="dropdown-icon-button"
          isActive={isLogoutDropdownOpen}
        />
      </Container>

      {isLogoutDropdownOpen && <LogoutButton onPress={onLogout} />}
    </>
  );
}
