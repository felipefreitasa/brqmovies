import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 45px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const LogoImage = styled.Image`
  width: 224px;
  height: 224px;
`;

export const FormInputsContainer = styled.View`
  width: 100%;
  margin-bottom: 32px;
`;

export const FormButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const ForgotPasswordButtonLabel = styled.Text`
  font-size: 14px;
  margin-top: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.BOLD};
  `}
`;
