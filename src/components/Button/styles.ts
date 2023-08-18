import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'

type Props = {
  disabled?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  
  ${({ theme, disabled }) => css`
    background-color: ${disabled ? theme.COLORS.GRAY : theme.COLORS.PRIMARY};
  `}
`;

export const Title = styled.Text<Props>`
  font-size: 14px;
  line-height: 20px;

  ${({ theme, disabled }) => css`
    font-family: ${theme.FONTS.BOLD};
    color: ${disabled ? theme.COLORS.BACKGROUND_SECONDARY : theme.COLORS.WHITE};
  `}
`