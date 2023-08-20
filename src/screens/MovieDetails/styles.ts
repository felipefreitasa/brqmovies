import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  z-index: 1;
  padding: 20px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${Platform.OS === "ios" ? 70 : 20}px;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  margin: 0 8px;
  font-size: 22px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const Poster = styled.Image`
  width: 100%;
  height: 580px;
  object-fit: cover;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px;
  justify-content: flex-start;
`;

export const OriginalTitle = styled.Text`
  font-size: 26px;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const SynopsisLabel = styled.Text`
  font-size: 14px;
  margin-bottom: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY};
    font-family: ${theme.FONTS.BOLD};
  `}
`;

export const Overview = styled.Text`
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;

export const CardsContainer = styled.View`
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between
`;
