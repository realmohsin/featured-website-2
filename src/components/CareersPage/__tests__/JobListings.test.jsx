import React from "react";
import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import JobListings from "../JobListings";

const theme = createMuiTheme({
  custom: {
    title3: {
      fontSize: "3.2rem",
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

describe("JobListings Component", () => {
  it("renders job listings section", () => {
    const { container } = renderWithTheme(<JobListings />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays all job titles", () => {
    renderWithTheme(<JobListings />);

    expect(
      screen.getByRole("heading", { name: /office manager/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /experienced corporate attorney/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /client development director/i })
    ).toBeInTheDocument();
  });

  it("displays office manager job details", () => {
    renderWithTheme(<JobListings />);

    // Get the office manager section
    const officeManagerSection = screen
      .getByRole("heading", { name: /office manager/i })
      .closest("section");

    // Check for section headers within the office manager section
    expect(
      within(officeManagerSection).getByText(/you are:/i)
    ).toBeInTheDocument();
    expect(
      within(officeManagerSection).getByText(/you have:/i)
    ).toBeInTheDocument();
    expect(
      within(officeManagerSection).getByText(/you would:/i)
    ).toBeInTheDocument();
    expect(
      within(officeManagerSection).getByText(/why you'll love it here:/i)
    ).toBeInTheDocument();
    expect(
      within(officeManagerSection).getByText(/to be considered:/i)
    ).toBeInTheDocument();
  });

  it("renders proper list structure", () => {
    renderWithTheme(<JobListings />);

    const lists = screen.getAllByRole("list");
    expect(lists.length).toBeGreaterThan(0); // At least one list should be present

    // Get all list items across all job postings
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0); // At least one list item should be present

    // Verify each list has at least one list item
    lists.forEach((list) => {
      const items = within(list).getAllByRole("listitem");
      expect(items.length).toBeGreaterThan(0);
    });
  });

  it("has proper section structure", () => {
    renderWithTheme(<JobListings />);

    const sections = document.querySelectorAll("section");
    expect(sections).toHaveLength(3); // Three job sections
  });
});
