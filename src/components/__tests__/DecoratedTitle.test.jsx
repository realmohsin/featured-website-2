import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import DecoratedTitle from "../DecoratedTitle";

// Mock the TitleDecoration SVG component
jest.mock("../../assets/svgs/TitleDecoration", () => {
  return function TitleDecoration({ color, className }) {
    return <div data-testid="title-decoration" className={className} style={{ color }} />;
  };
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0E5C60", light: "#4A8B8F" },
    secondary: { main: "#CCAB63" },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("DecoratedTitle Component", () => {
  it("renders with basic title", () => {
    const { container } = renderWithTheme(<DecoratedTitle title="Test Title" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with closer prop", () => {
    const { container } = renderWithTheme(
      <DecoratedTitle title="Closer Title" closer />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with smallerFont prop", () => {
    const { container } = renderWithTheme(
      <DecoratedTitle title="Smaller Font Title" smallerFont />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom classStyles", () => {
    const { container } = renderWithTheme(
      <DecoratedTitle title="Custom Styled Title" classStyles="custom-class" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with all props combined", () => {
    const { container } = renderWithTheme(
      <DecoratedTitle
        title="All Props Title"
        closer
        smallerFont
        classStyles="combined-class"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
