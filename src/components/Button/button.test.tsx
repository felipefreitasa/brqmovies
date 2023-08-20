import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { theme } from "@theme/index";

import { Button } from "@components/Button";

describe("Component: Button", () => {
  const mockOnPress = jest.fn();

  const defaultButtonProps = {
    title: "Entrar",
    disabled: false,
    onPress: mockOnPress,
  };

  it("should render title correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultButtonProps} />
      </ThemeProvider>
    );
    const titleElement = getByText("Entrar");
    expect(titleElement).toBeTruthy();
  });

  it("should calls onPress when the button is pressed", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultButtonProps} />
      </ThemeProvider>
    );
    const button = getByText("Entrar");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should disables the button when disabled prop is true", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button {...defaultButtonProps} disabled={true} />
      </ThemeProvider>
    );
    const button = getByText("Entrar");
    expect(button.props.disabled).toBe(true);
  });
});
