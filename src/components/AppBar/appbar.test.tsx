import { ThemeProvider } from "styled-components/native";
import { render, fireEvent } from "@testing-library/react-native";

import { theme } from "@theme/index";

import { AppBar } from "@components/AppBar";

describe("Component: AppBar", () => {
  const mockOnLogout = jest.fn();
  const mockOnClickMoreButton = jest.fn();

  const appBarProps = {
    title: "BRQ Movies",
    onLogout: mockOnLogout,
    isLogoutDropdownOpen: false,
    onClickMoreButton: mockOnClickMoreButton,
  };

  function renderAppBar() {
    return render(
      <ThemeProvider theme={theme}>
        <AppBar {...appBarProps} />
      </ThemeProvider>
    );
  }

  it("should render title correctly", () => {
    const { getByText } = renderAppBar()

    const titleElement = getByText("BRQ Movies");
    expect(titleElement).toBeTruthy();
  });

  it("should call onClickMoreButton when the icon button is clicked", () => {
    const { getByTestId } = renderAppBar()

    const iconButton = getByTestId("dropdown-icon-button");
    fireEvent.press(iconButton);

    expect(mockOnClickMoreButton).toHaveBeenCalledTimes(1);
  });

  it("renders LogoutButton when isLogoutDropdownOpen is true", () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <AppBar {...appBarProps} isLogoutDropdownOpen={true} />
      </ThemeProvider>
    );

    const logoutButton = queryByTestId("logout-button");
    expect(logoutButton).toBeTruthy();
  });

  it("calls onLogout when LogoutButton is pressed", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AppBar {...appBarProps} isLogoutDropdownOpen={true} />
      </ThemeProvider>
    );

    const logoutButton = getByTestId("logout-button");
    fireEvent.press(logoutButton);

    expect(mockOnLogout).toHaveBeenCalledTimes(1);
  });
});
