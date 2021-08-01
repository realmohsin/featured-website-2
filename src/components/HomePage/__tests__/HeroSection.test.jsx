import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { useStaticQuery } from 'gatsby';
import HeroSection from '../HeroSection';

// Mock the gatsby-plugin-image component
jest.mock('gatsby-plugin-image', () => {
  const React = require('react');
  const MockImage = ({ objectPosition, ...props }) => {
    // Convert objectPosition to style prop to avoid React warning
    const style = objectPosition ? { objectPosition } : {};
    return <img {...props} style={style} data-testid="hero-image" src="test-hero-image.jpg" />;
  };
  return {
    __esModule: true,
    GatsbyImage: MockImage,
    getImage: () => ({
      layout: 'fullWidth',
      images: {
        fallback: {
          src: 'test-hero-image.jpg',
          srcSet: 'test-hero-image.jpg 1x',
          sizes: '100vw'
        }
      },
      width: 1200,
      height: 800
    })
  };
});

// Mock useStaticQuery
const mockUseStaticQuery = {
  contentfulRomanoHomePage: {
    heroImageTitle: 'Test Hero Title',
    heroImage1: {
      gatsbyImageData: {
        layout: 'fullWidth',
        images: {
          fallback: {
            src: 'test-hero-image.jpg',
            srcSet: 'test-hero-image.jpg 1x',
            sizes: '100vw'
          }
        },
        width: 1200,
        height: 800
      }
    }
  }
};

// Mock theme
const theme = createMuiTheme({
  custom: {
    title1: {
      fontSize: '5.6rem',
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: '2rem',
    },
  },
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
  },
  breakpoints: {
    down: () => '@media (max-width: 1024px)',
  },
});

describe('HeroSection', () => {
  // Mock the module
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  // Clear mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithTheme = (component) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  it('renders the hero section with image', () => {
    renderWithTheme(<HeroSection />);
    
    // Check if the hero section is rendered
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();
    
    // Check if the image is rendered with correct test id and source
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'test-hero-image.jpg');
    expect(heroImage).toHaveAttribute('alt', 'Romana Law Lawyers');
  });

  it('matches snapshot', () => {
    const { container } = renderWithTheme(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
});
