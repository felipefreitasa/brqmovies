import styled from 'styled-components/native'

import { theme } from '@theme/index'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.BACKGROUND};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.PRIMARY
}))``