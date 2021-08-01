import React from "react";
import { render } from "@testing-library/react";
import HtmlHead from "../HtmlHead";

// Mock Gatsby's useStaticQuery and graphql
jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        title: "Romano Law PLLC",
        description: "Business, Entertainment & Dispute Resolution Law Firm",
        author: "Romano Law",
      },
    },
  })),
  graphql: jest.fn(),
}));

// Mock react-helmet
jest.mock("react-helmet", () => ({
  Helmet: ({ children }) => <div data-testid="helmet">{children}</div>,
}));

describe("HtmlHead Component", () => {
  it("renders with default site metadata", () => {
    const { container } = render(<HtmlHead />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom title", () => {
    const { container } = render(<HtmlHead title="Custom Page Title" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom description", () => {
    const { container } = render(
      <HtmlHead description="Custom page description for SEO" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with both custom title and description", () => {
    const { container } = render(
      <HtmlHead
        title="About Us - Romano Law"
        description="Learn about Romano Law PLLC and our experienced legal team"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
