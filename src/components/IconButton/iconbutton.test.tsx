import { ThemeProvider } from "styled-components/native";
import { render, fireEvent } from "@testing-library/react-native";

import { theme } from "@theme/index";

import { IconButton } from "@components/IconButton";

describe("Component: IconButton", () => {
  const mockOnPress = jest.fn();

  function renderIconButton() {
    return render(
      <ThemeProvider theme={theme}>
        <IconButton
          icon="check"
          isActive={true}
          iconColor="blue"
          onPress={mockOnPress}
        />
      </ThemeProvider>
    );
  }

  it("should call onPress when button is pressed", () => {
    const { getByTestId } = renderIconButton();
    const containerElement = getByTestId("icon-button-container");

    fireEvent.press(containerElement);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
