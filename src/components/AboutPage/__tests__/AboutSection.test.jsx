import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import AboutSection from "../AboutSection";

// Mock gatsby-plugin-image
jest.mock("gatsby-plugin-image", () => ({
  StaticImage: ({ src, alt, className, ...props }) => (
    <img src={src} alt={alt} className={className} {...props} />
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

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("AboutSection Component", () => {
  it("renders about section with all content", () => {
    const { container } = renderWithTheme(<AboutSection />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
