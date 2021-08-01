import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import MediaSection from "../MediaSection";

// Mock gatsby-plugin-image
jest.mock("gatsby-plugin-image", () => ({
  StaticImage: ({ src, alt, className, ...props }) => (
    <img src={src} alt={alt} className={className} {...props} />
  ),
  getImage: jest.fn((image) => image)
}));

// Mock the Button component
jest.mock("../../Button", () => ({
  __esModule: true,
  default: ({ text, href, ...props }) => (
    <a href={href} {...props}>
      {text}
    </a>
  ),
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0E5C60", light: "#4A8B8F" },
    secondary: { main: "#CCAB63" },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
  custom: {
    title2: {
      fontSize: "5.6rem",
      fontWeight: "bold",
    },
    title3: {
      fontSize: "3.2rem",
    },
    title5: {
      fontSize: "1.8rem",
    },
  },
});

// Mock window.matchMedia which is not available in JSDOM
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("MediaSection Component", () => {
  it("renders media section with all content", () => {
    const { container } = renderWithTheme(<MediaSection />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
