import { Platform } from "react-native";
import { css, styled } from "styled-components/native";

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
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;