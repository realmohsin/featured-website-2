import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import TeamSection from "../TeamSection";

// Mock Gatsby's useStaticQuery and graphql
jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(() => ({
    allFile: {
      nodes: [
        {
          childImageSharp: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: "/static/team-member-1.jpg",
                },
              },
            },
          },
        },
        {
          childImageSharp: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: "/static/team-member-2.jpg",
                },
              },
            },
          },
        },
        {
          childImageSharp: {
            gatsbyImageData: {
              images: {
                fallback: {
                  src: "/static/team-member-3.jpg",
                },
              },
            },
          },
        },
      ],
    },
  })),
  graphql: jest.fn(),
}));

// Mock gatsby-plugin-image
jest.mock("gatsby-plugin-image", () => ({
  GatsbyImage: ({ image, alt, ...props }) => (
    <img
      src={image?.images?.fallback?.src || "/mock-team-image.jpg"}
      alt={alt}
      {...props}
    />
  ),
  getImage: jest.fn((image) => image),
}));

// Mock team members data
jest.mock("../../../data/team-members", () => [
  {
    id: 1,
    name: "Domenic Romano",
    title: "Managing Partner",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Senior Associate",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Legal Counsel",
  },
]);

const theme = createMuiTheme({
  custom: {
    title2: {
      fontSize: "5.6rem",
      fontWeight: "bold",
    },
    title5: {
      fontSize: "1.8rem",
    },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("TeamSection Component", () => {
  it("renders team section with all members", () => {
    const { container } = renderWithTheme(<TeamSection />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays section title", () => {
    renderWithTheme(<TeamSection />);
    expect(screen.getByText(/legal team/i)).toBeInTheDocument();
  });

  it("renders all team members", () => {
    renderWithTheme(<TeamSection />);
    
    expect(screen.getByText(/domenic romano/i)).toBeInTheDocument();
    expect(screen.getByText(/sarah johnson/i)).toBeInTheDocument();
    expect(screen.getByText(/michael chen/i)).toBeInTheDocument();
  });

  it("displays team member titles", () => {
    renderWithTheme(<TeamSection />);
    
    expect(screen.getByText(/managing partner/i)).toBeInTheDocument();
    expect(screen.getByText(/senior associate/i)).toBeInTheDocument();
    expect(screen.getByText(/legal counsel/i)).toBeInTheDocument();
  });

  it("renders team member images", () => {
    renderWithTheme(<TeamSection />);
    
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
    
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt", "Business Law");
    });
  });

  it("uses proper semantic structure with figures and figcaptions", () => {
    renderWithTheme(<TeamSection />);
    
    const figures = screen.getAllByRole("figure");
    expect(figures).toHaveLength(3);
  });
});
