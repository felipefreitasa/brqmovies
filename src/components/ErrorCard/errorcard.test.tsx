import { ThemeProvider } from "styled-components/native";
import { render, fireEvent } from "@testing-library/react-native";

import { ErrorCard } from "@components/ErrorCard";

import { theme } from "@theme/index";

describe("Component: ErrorCard", () => {
  function renderErrorCard() {
    return render(
      <ThemeProvider theme={theme}>
        <ErrorCard title="Erro" icon="wifi" subtitle="Tivemos um problema" />
      </ThemeProvider>
    );
  }

  it("should render the title and subtitle correctly", () => {
    const { getByText } = renderErrorCard();

    const titleElement = getByText("Erro");
    const subtitleElement = getByText("Tivemos um problema");

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
  });

  it("should render the button when provided with title and onTryAgain callback", () => {
    const mockOnTryAgain = jest.fn();

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ErrorCard
          title="Error Title"
          subtitle="An error occurred"
          buttonTitle="Try Again"
          onTryAgain={mockOnTryAgain}
          icon="error-outline"
        />
      </ThemeProvider>
    );

    const buttonElement = getByText("Try Again");
    expect(buttonElement).toBeTruthy();

    fireEvent.press(buttonElement);
    expect(mockOnTryAgain).toHaveBeenCalledTimes(1);
  });

  it("should not render the button when buttonTitle is not provided", () => {
    const { queryByText } = renderErrorCard();

    const buttonElement = queryByText("Try Again");
    expect(buttonElement).toBeNull();
  });
});
