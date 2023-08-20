import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  padding-top: ${Platform.OS === "ios" ? 70 : 20}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;

export const BackButtonContainer = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  margin-right: 8px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 22px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;