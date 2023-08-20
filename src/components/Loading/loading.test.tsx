import { render, screen } from "@testing-library/react-native";

import { Loading } from "@components/Loading";

describe("Component: Loading", () => {
  it("should be render", () => {
    render(<Loading />);

    const loading = screen.getByTestId("loading");

    expect(loading).toBeTruthy();
  });
});
