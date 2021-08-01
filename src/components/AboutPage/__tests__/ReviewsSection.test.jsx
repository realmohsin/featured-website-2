import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import ReviewsSection from "../ReviewsSection";

// Mock Review component
jest.mock("../Review", () => {
  return function MockReview({ review }) {
    return (
      <div data-testid={`review-${review.id || review.name}`}>
        <span>{review.name}</span>
        <span>{review.content}</span>
      </div>
    );
  };
});

// Mock Button component
jest.mock("../../Button", () => {
  return function MockButton({ text, handleClick, extraClassName }) {
    return (
      <button onClick={handleClick} className={extraClassName}>
        {text}
      </button>
    );
  };
});

// Mock reviews data
jest.mock("../../../data/reviews", () => [
  { id: 1, name: "John Doe", content: "Great service!" },
  { id: 2, name: "Jane Smith", content: "Excellent lawyers!" },
  { id: 3, name: "Bob Johnson", content: "Highly recommend!" },
  { id: 4, name: "Alice Brown", content: "Professional team!" },
  { id: 5, name: "Charlie Wilson", content: "Outstanding work!" },
  { id: 6, name: "Diana Davis", content: "Very satisfied!" },
  { id: 7, name: "Eve Miller", content: "Top quality service!" },
  { id: 8, name: "Frank Garcia", content: "Exceeded expectations!" },
  { id: 9, name: "Grace Lee", content: "Fantastic experience!" },
  { id: 10, name: "Henry Taylor", content: "Would hire again!" },
  { id: 11, name: "Ivy Anderson", content: "Best law firm!" },
]);

const theme = createMuiTheme({
  custom: {
    title2: {
      fontSize: "5.6rem",
      fontWeight: "bold",
    },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("ReviewsSection Component", () => {
  it("renders reviews section with initial reviews", () => {
    const { container } = renderWithTheme(<ReviewsSection />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays section title", () => {
    renderWithTheme(<ReviewsSection />);
    expect(screen.getByRole("heading", { name: /reviews/i })).toBeInTheDocument();
  });

  it("renders first 6 reviews initially", () => {
    renderWithTheme(<ReviewsSection />);
    
    expect(screen.getByTestId("review-1")).toBeInTheDocument();
    expect(screen.getByTestId("review-2")).toBeInTheDocument();
    expect(screen.getByTestId("review-3")).toBeInTheDocument();
    expect(screen.getByTestId("review-4")).toBeInTheDocument();
    expect(screen.getByTestId("review-5")).toBeInTheDocument();
    expect(screen.getByTestId("review-6")).toBeInTheDocument();
  });

  it("does not show additional reviews initially", () => {
    renderWithTheme(<ReviewsSection />);
    
    expect(screen.queryByTestId("review-7")).not.toBeInTheDocument();
    expect(screen.queryByTestId("review-8")).not.toBeInTheDocument();
  });

  it("shows 'See More Reviews' button initially", () => {
    renderWithTheme(<ReviewsSection />);
    expect(screen.getByText(/see more reviews/i)).toBeInTheDocument();
  });

  it("expands to show more reviews when button is clicked", () => {
    renderWithTheme(<ReviewsSection />);
    
    const moreButton = screen.getByText(/see more reviews/i);
    fireEvent.click(moreButton);
    
    expect(screen.getByTestId("review-7")).toBeInTheDocument();
    expect(screen.getByTestId("review-8")).toBeInTheDocument();
    expect(screen.getByTestId("review-9")).toBeInTheDocument();
  });

  it("changes button text to 'See Less Reviews' when expanded", () => {
    renderWithTheme(<ReviewsSection />);
    
    const moreButton = screen.getByText(/see more reviews/i);
    fireEvent.click(moreButton);
    
    expect(screen.getByText(/see less reviews/i)).toBeInTheDocument();
    expect(screen.queryByText(/see more reviews/i)).not.toBeInTheDocument();
  });

  it("collapses reviews when 'See Less' is clicked", () => {
    renderWithTheme(<ReviewsSection />);
    
    // Expand first
    const moreButton = screen.getByText(/see more reviews/i);
    fireEvent.click(moreButton);
    
    // Then collapse
    const lessButton = screen.getByText(/see less reviews/i);
    fireEvent.click(lessButton);
    
    expect(screen.queryByTestId("review-7")).not.toBeInTheDocument();
    expect(screen.getByText(/see more reviews/i)).toBeInTheDocument();
  });

  it("has correct section id for navigation", () => {
    renderWithTheme(<ReviewsSection />);
    const section = document.querySelector("section");
    expect(section).toHaveAttribute("id", "reviews-section");
  });
});
