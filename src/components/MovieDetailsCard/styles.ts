import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 48%;
  height: 88px;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Label = styled.Text`
  flex: 1;
  font-size: 14px;
  margin-left: 8px;

  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
  `}
`;

export const Description = styled.Text`
  flex: 1;
  font-size: 20px;
  margin-top: 12px;

  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
  `}
`;
