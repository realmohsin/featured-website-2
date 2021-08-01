import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import AboutHeroSection from "../AboutHeroSection";

// Mock Gatsby's useStaticQuery and graphql
jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(() => ({
    contentfulRomanoAboutPage: {
      heroImage: {
        gatsbyImageData: {
          layout: "fullWidth",
          images: {
            fallback: {
              src: "/static/hero-image.jpg",
              srcSet: "/static/hero-image.jpg 1920w",
            },
          },
        },
      },
    },
  })),
  graphql: jest.fn(),
}));

// Mock gatsby-plugin-image
jest.mock("gatsby-plugin-image", () => ({
  GatsbyImage: ({ image, alt, className, layout, ...props }) => (
    <img
      src={image?.images?.fallback?.src || "/mock-image.jpg"}
      alt={alt}
      className={className}
      data-layout={layout}
      {...props}
    />
  ),
  getImage: jest.fn((image) => image),
}));

const theme = createMuiTheme({
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("AboutHeroSection Component", () => {
  it("renders hero section with image", () => {
    const { container } = renderWithTheme(<AboutHeroSection />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
