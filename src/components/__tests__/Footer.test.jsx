import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Footer from "../Footer";

// Mock Gatsby's StaticImage component
jest.mock("gatsby-plugin-image", () => ({
  StaticImage: ({ src, className, ...props }) => (
    <img src={src} className={className} {...props} alt="Static" />
  ),
}));

// Mock Gatsby's Link component
jest.mock("gatsby", () => ({
  Link: ({ to, children, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0E5C60", light: "#4A8B8F" },
    secondary: { main: "#CCAB63" },
    common: {
      goldVariant1: "#CCAB63",
    },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Footer Component", () => {
  it("renders footer element", () => {
    renderWithTheme(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = renderWithTheme(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

});
