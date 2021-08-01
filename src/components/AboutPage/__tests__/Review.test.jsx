import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Review from "../Review";

// Mock react-icons
jest.mock("react-icons/fa", () => ({
  FaFacebook: ({ color, size, className }) => (
    <div data-testid="facebook-icon" style={{ color }} className={className}>
      FB
    </div>
  ),
  FaStar: ({ color, size, className }) => (
    <div data-testid="star-icon" style={{ color }} className={className}>
      ★
    </div>
  ),
}));

jest.mock("react-icons/fc", () => ({
  FcGoogle: ({ size, className }) => (
    <div data-testid="google-icon" className={className}>
      G
    </div>
  ),
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0E5C60", light: "#4A8B8F", dark: "#0A4A4D" },
    common: {
      fadedTextColor: "#999",
      facebookColor: "#1877F2",
      googleStarColor: "#FFC107",
    },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const mockReview = {
  name: "John Doe",
  daysAgo: "2 days ago",
  type: "facebook",
  content: "This is a great law firm with excellent service. They helped me with my business legal needs and I couldn't be happier with the results. The team is professional and knowledgeable.",
};

const mockGoogleReview = {
  name: "Jane Smith",
  daysAgo: "1 week ago",
  type: "google",
  content: "Outstanding legal representation. Highly recommend their services for any business legal matters.",
};

describe("Review Component", () => {
  it("renders review with Facebook type", () => {
    const { container } = renderWithTheme(<Review review={mockReview} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders review with Google type", () => {
    const { container } = renderWithTheme(<Review review={mockGoogleReview} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays reviewer name and date", () => {
    renderWithTheme(<Review review={mockReview} />);
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/2 days ago/i)).toBeInTheDocument();
  });

  it("renders 5 star icons", () => {
    renderWithTheme(<Review review={mockReview} />);
    const stars = screen.getAllByTestId("star-icon");
    expect(stars).toHaveLength(5);
  });

  it("displays Facebook icon for Facebook reviews", () => {
    renderWithTheme(<Review review={mockReview} />);
    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("google-icon")).not.toBeInTheDocument();
  });

  it("displays Google icon for Google reviews", () => {
    renderWithTheme(<Review review={mockGoogleReview} />);
    expect(screen.getByTestId("google-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("facebook-icon")).not.toBeInTheDocument();
  });

  it("truncates long content initially", () => {
    renderWithTheme(<Review review={mockReview} />);
    expect(screen.getByText(/read more/i)).toBeInTheDocument();
    expect(screen.queryByText(/read less/i)).not.toBeInTheDocument();
  });

  it("expands content when Read More is clicked", () => {
    renderWithTheme(<Review review={mockReview} />);
    
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.click(readMoreButton);
    
    expect(screen.getByText(/read less/i)).toBeInTheDocument();
    expect(screen.queryByText(/read more/i)).not.toBeInTheDocument();
  });

  it("collapses content when Read Less is clicked", () => {
    renderWithTheme(<Review review={mockReview} />);
    
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.click(readMoreButton);
    
    const readLessButton = screen.getByText(/read less/i);
    fireEvent.click(readLessButton);
    
    expect(screen.getByText(/read more/i)).toBeInTheDocument();
    expect(screen.queryByText(/read less/i)).not.toBeInTheDocument();
  });

  it("handles keyboard interaction for Read More/Less", () => {
    renderWithTheme(<Review review={mockReview} />);
    
    const readMoreButton = screen.getByText(/read more/i);
    fireEvent.keyDown(readMoreButton, { key: "Enter" });
    
    expect(screen.getByText(/read less/i)).toBeInTheDocument();
  });
});
