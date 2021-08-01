import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Input from "../Input";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0E5C60", dark: "#0A4A4D" },
    secondary: { main: "#CCAB63" },
  },
  breakpoints: {
    down: () => "@media (max-width: 600px)",
  },
});

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Input Component", () => {
  it("renders regular input field", () => {
    const { container } = renderWithTheme(
      <Input
        type="text"
        name="firstName"
        value=""
        label="First Name"
        onChange={() => {}}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders textarea when isTextarea is true", () => {
    const { container } = renderWithTheme(
      <Input
        isTextarea
        name="message"
        value=""
        label="Message"
        rows={5}
        onChange={() => {}}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with filled value (shrunk label)", () => {
    const { container } = renderWithTheme(
      <Input
        type="email"
        name="email"
        value="test@example.com"
        label="Email"
        onChange={() => {}}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders without label", () => {
    const { container } = renderWithTheme(
      <Input
        type="text"
        name="noLabel"
        value=""
        onChange={() => {}}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onChange when input value changes", () => {
    const mockOnChange = jest.fn();
    renderWithTheme(
      <Input
        type="text"
        name="testInput"
        value=""
        label="Test Input"
        onChange={mockOnChange}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("calls onChange when textarea value changes", () => {
    const mockOnChange = jest.fn();
    renderWithTheme(
      <Input
        isTextarea
        name="testTextarea"
        value=""
        label="Test Textarea"
        rows={3}
        onChange={mockOnChange}
      />
    );

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "new textarea value" } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("applies correct props to input element", () => {
    renderWithTheme(
      <Input
        type="email"
        name="email"
        value="test@example.com"
        label="Email Address"
        placeholder="Enter your email"
        required
        onChange={() => {}}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("name", "email");
    expect(input).toHaveAttribute("placeholder", "Enter your email");
    expect(input).toHaveAttribute("required");
    expect(input).toHaveValue("test@example.com");
  });

  it("applies correct props to textarea element", () => {
    renderWithTheme(
      <Input
        isTextarea
        name="message"
        value="Test message"
        label="Message"
        rows={5}
        cols={50}
        placeholder="Enter your message"
        onChange={() => {}}
      />
    );

    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName).toBe("TEXTAREA");
    expect(textarea).toHaveAttribute("name", "message");
    expect(textarea).toHaveAttribute("rows", "5");
    expect(textarea).toHaveAttribute("cols", "50");
    expect(textarea).toHaveAttribute("placeholder", "Enter your message");
    expect(textarea).toHaveValue("Test message");
  });
});
