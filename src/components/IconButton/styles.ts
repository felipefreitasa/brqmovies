import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8
}))`
  width: 36px;
  height: 36px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;