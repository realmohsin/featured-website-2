import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

// Mock Gatsby's useStaticQuery and StaticQuery
const mockUseStaticQuery = {
  default: jest.fn(),
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
  StaticQuery: jest.fn(),
};

jest.mock("gatsby", () => mockUseStaticQuery);

// Mock gatsby-plugin-image
jest.mock("gatsby-plugin-image", () => ({
  GatsbyImage: ({ image, alt, ...props }) => <img alt={alt} {...props} />,
  StaticImage: ({ src, alt, ...props }) => (
    <img src={src} alt={alt} {...props} />
  ),
  getImage: jest.fn((image) => image),
}));

// Mock Material-UI theme
jest.mock("@material-ui/core/styles", () => ({
  ...jest.requireActual("@material-ui/core/styles"),
  useTheme: () => ({
    breakpoints: {
      down: () => "@media (max-width: 600px)",
    },
    palette: {
      primary: { main: "#0E5C60", dark: "#002B2E" },
      secondary: { main: "#CCAB63", dark: "#B8964F" },
      common: { goldVariant1: "#CCAB63" },
    },
    custom: {
      title2: { fontSize: "2.4rem" },
      title3: { fontSize: "2rem" },
      title4: { fontSize: "1.8rem" },
    },
  }),
}));

// Mock useMediaQuery
jest.mock("@material-ui/core/useMediaQuery", () => jest.fn(() => false));
