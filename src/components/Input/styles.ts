import styled, { css } from 'styled-components/native'

export const ErrorMessage = styled.Text`
  top: 60px;
  font-size: 12px;
  position: absolute;

  ${({ theme }) => css`
    color: ${theme.COLORS.ERROR};
    font-family: ${theme.FONTS.REGULAR};
  `}
`;