import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";

type Props = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.8
}))<Props>`
  width: 36px;
  height: 36px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.PRIMARY :  theme.COLORS.BACKGROUND};`;