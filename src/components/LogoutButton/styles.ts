import { css, styled } from "styled-components/native";

export const Container = styled.Pressable`
  top: 60px;
  z-index: 20;
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

export const Title = styled.Text`
  flex: 1;
  font-size: 20px;
  margin-left: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.REGULAR};
    color: ${theme.COLORS.WHITE};
  `}
`;
