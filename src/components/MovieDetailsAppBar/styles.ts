import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Platform.OS === "ios" ? 70 : 20}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;

export const BackButtonContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8
}))`
  width: 36px;
  height: 36px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  flex: 1;
  margin: 0 8px;
  font-size: 22px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;