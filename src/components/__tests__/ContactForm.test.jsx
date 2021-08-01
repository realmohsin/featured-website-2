import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import ContactForm from "../ContactForm";

// Mock Gatsby's StaticImage component
jest.mock("gatsby-plugin-image", () => ({
  StaticImage: ({ src, className, alt, ...props }) => (
    <img src={src} className={className} alt={alt} {...props} />
  ),
}));

// Mock Input and Button components
jest.mock("../Input", () => {
  return function MockInput({
    label,
    value,
    onChange,
    name,
    type,
    isTextarea,
    ...props
  }) {
    const Component = isTextarea ? "textarea" : "input";
    return (
      <div data-testid={`input-${name}`}>
        <Component
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          {...props}
        />
        {label && <label>{label}</label>}
      </div>
    );
  };
});

jest.mock("../Button", () => {
  return function MockButton({ text, extraClassName, ...props }) {
    return (
      <button className={extraClassName} {...props}>
        {text}
      </button>
    );
  };
});

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0E5C60", light: "#4A8B8F" },
    secondary: { main: "#CCAB63", dark: "#B8965A" },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
  custom: {
    title2: {
      fontSize: "4.8rem",
      fontWeight: "bold",
    },
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("ContactForm Component", () => {
  it("renders contact form with all elements", () => {
    const { container } = renderWithTheme(<ContactForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays contact title and phone information", () => {
    renderWithTheme(<ContactForm />);
    expect(screen.getByText(/How Can We Help?/i)).toBeInTheDocument();
    expect(screen.getByText(/call us at/i)).toBeInTheDocument();
    expect(screen.getByText(/\(123\) 456-7890/)).toBeInTheDocument();
    expect(screen.getByText(/or submit a message\./i)).toBeInTheDocument();
  });

  it("renders phone link with correct href", () => {
    renderWithTheme(<ContactForm />);

    const phoneLink = screen.getByRole("link", { name: "(123) 456-7890" });
    expect(phoneLink).toHaveAttribute("href", "tel:123-456-7890");
  });

  it("renders all form inputs", () => {
    renderWithTheme(<ContactForm />);

    expect(screen.getByTestId("input-firstName")).toBeInTheDocument();
    expect(screen.getByTestId("input-lastName")).toBeInTheDocument();
    expect(screen.getByTestId("input-telephone")).toBeInTheDocument();
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-message")).toBeInTheDocument();
  });

  it("renders submit button", () => {
    renderWithTheme(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });

  it("updates form state when input values change", () => {
    renderWithTheme(<ContactForm />);

    const firstNameInput = screen
      .getByTestId("input-firstName")
      .querySelector("input");
    const lastNameInput = screen
      .getByTestId("input-lastName")
      .querySelector("input");
    const emailInput = screen.getByTestId("input-email").querySelector("input");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("john@example.com");
  });

  it("updates textarea value", () => {
    renderWithTheme(<ContactForm />);

    const messageTextarea = screen
      .getByTestId("input-message")
      .querySelector("textarea");

    fireEvent.change(messageTextarea, {
      target: { value: "This is a test message for the contact form." },
    });

    expect(messageTextarea.value).toBe(
      "This is a test message for the contact form."
    );
  });

  it("renders background image", () => {
    renderWithTheme(<ContactForm />);

    const backgroundImage = screen.getByAltText("background");
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute(
      "src",
      "../assets/images/light-bg.png"
    );
  });

  it("renders with correct input types", () => {
    renderWithTheme(<ContactForm />);

    const firstNameInput = screen
      .getByTestId("input-firstName")
      .querySelector("input");
    const telephoneInput = screen
      .getByTestId("input-telephone")
      .querySelector("input");
    const emailInput = screen.getByTestId("input-email").querySelector("input");

    expect(firstNameInput).toHaveAttribute("type", "text");
    expect(telephoneInput).toHaveAttribute("type", "tel");
    expect(emailInput).toHaveAttribute("type", "email");
  });
});
