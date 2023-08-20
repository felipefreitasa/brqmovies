import { Platform } from "react-native";
import { css, styled } from "styled-components/native";

type Props = {
  isActive: boolean;
};

export const Container = styled.View`
  padding: 0 20px;
  padding-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Platform.OS === "ios" ? 70 : 20}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  font-size: 22px;

  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
  `}
`;

export const LogoutDropdownIconButton = styled.Pressable<Props>`
  border-radius: 40px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PRIMARY : "transparent"};
`;

export const LogoutButton = styled.Pressable`
  top: 60px;
  z-index: 1;
  right: 20px;
  width: 117px;
  height: 44px;
  padding: 0 20px;
  position: absolute;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;

export const LogoutButtonTitle = styled.Text`
  flex: 1;
  font-size: 20px;
  margin-left: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;
