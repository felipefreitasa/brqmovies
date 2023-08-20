import { ThemeProvider } from 'styled-components/native';
import { render, fireEvent } from '@testing-library/react-native';

import { theme } from '@theme/index';

import { LogoutButton } from '@components/LogoutButton'

describe('Component: LogoutButton', () => {
  const mockOnPress = jest.fn();

  const defaultProps = {
    onPress: mockOnPress,
  };

  it('should render title correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <LogoutButton {...defaultProps} />
      </ThemeProvider>
    );

    const titleElement = getByText('Sair');

    expect(titleElement).toBeTruthy();
  });

  it('should call onPress when button is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <LogoutButton {...defaultProps} />
      </ThemeProvider>
    );

    const buttonElement = getByTestId('logout-button');
    fireEvent.press(buttonElement);
    
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
