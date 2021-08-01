import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { useStaticQuery } from 'gatsby';
import ContactHero from '../ContactHero';

// Mock the gatsby-plugin-image component
jest.mock('gatsby-plugin-image', () => {
  const React = require('react');
  const MockImage = (props) => {
    return <img {...props} alt={props.alt} data-testid="contact-hero-image" />;
  };
  return {
    __esModule: true,
    GatsbyImage: MockImage,
    getImage: () => ({
      layout: 'fullWidth',
      images: {
        fallback: {
          src: 'test-image.jpg',
          srcSet: 'test-image.jpg 1x',
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
  contentfulRomanoAboutPage: {
    heroImage: {
      gatsbyImageData: {
        layout: 'fullWidth',
        images: {
          fallback: {
            src: 'test-image.jpg',
            srcSet: 'test-image.jpg 1x',
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

describe('ContactHero', () => {
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

  it('renders the hero image', () => {
    renderWithTheme(<ContactHero />);
    
    // Check if the hero image is rendered
    const heroImage = screen.getByTestId('contact-hero-image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('alt', 'Romana Law Lawyers');
  });

  it('matches snapshot', () => {
    const { container } = renderWithTheme(<ContactHero />);
    expect(container).toMatchSnapshot();
  });
});
