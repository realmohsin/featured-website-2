import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CareersIntro from "../CareersIntro";

const theme = createMuiTheme({
  custom: {
    title2: {
      fontSize: "5.6rem",
      fontWeight: "bold",
    },
    title3: {
      fontSize: "3.2rem",
    },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("CareersIntro Component", () => {
  it("renders careers intro section", () => {
    const { container } = renderWithTheme(<CareersIntro />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays main headings", () => {
    renderWithTheme(<CareersIntro />);
    expect(screen.getByRole("heading", { name: /careers/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /join our team/i })).toBeInTheDocument();
  });

  it("displays company description text", () => {
    renderWithTheme(<CareersIntro />);
    expect(screen.getByText(/we are innovative problem solvers/i)).toBeInTheDocument();
    expect(screen.getByText(/romano law is a boutique law firm/i)).toBeInTheDocument();
    expect(screen.getByText(/we are all about getting things done/i)).toBeInTheDocument();
    expect(screen.getByText(/the following positions are available/i)).toBeInTheDocument();
  });

  it("displays all available positions", () => {
    renderWithTheme(<CareersIntro />);
    
    expect(screen.getByRole("button", { name: /office manager/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /experienced corporate attorney/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /client development director/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /virtual assistant/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /experienced business litigation attorney/i })).toBeInTheDocument();
  });

  it("renders position buttons with correct styling", () => {
    renderWithTheme(<CareersIntro />);
    
    const positionButtons = screen.getAllByRole("button");
    expect(positionButtons).toHaveLength(5);
    
    positionButtons.forEach(button => {
      expect(button).toHaveAttribute("type", "button");
    });
  });
});
