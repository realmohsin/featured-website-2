import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IntroSection from '../IntroSection';

// Mock the gatsby-plugin-image component
jest.mock('gatsby-plugin-image', () => {
  const React = require('react');
  const MockImage = (props) => {
    return <img {...props} alt={props.alt} data-testid={props['data-testid'] || 'gatsby-image'} />;
  };
  return {
    __esModule: true,
    StaticImage: MockImage,
  };
});

// Mock useMediaQuery
jest.mock('@material-ui/core/useMediaQuery');

// Mock theme
const theme = createMuiTheme({
  custom: {
    title2: {
      fontSize: '5.6rem',
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: '2rem',
    },
    title3: {
      fontSize: '3.2rem',
      lineHeight: 1.2,
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    title4: {
      fontSize: '2.4rem',
      lineHeight: 1.3,
      fontWeight: 500,
      marginBottom: '1rem',
    },
  },
  palette: {
    secondary: {
      main: '#007bff',
    },
  },
  breakpoints: {
    down: () => '@media (max-width: 600px)',
  },
});

describe('IntroSection', () => {
  // Default to desktop view
  beforeEach(() => {
    useMediaQuery.mockReturnValue(false);
  });

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

  it('renders the intro section with all main components', () => {
    renderWithTheme(<IntroSection />);
    
    // Check main title
    expect(screen.getByText('We are Romano Law')).toBeInTheDocument();
    
    // Check subtitle
    expect(screen.getByText(/Innovative Legal Counsel for Business, Professionals & Creative People/i)).toBeInTheDocument();
    
    // Check content title
    expect(screen.getByText('We Love What We Do')).toBeInTheDocument();
    
    // Check some content text
    expect(screen.getByText(/We are committed to providing practical legal services/i)).toBeInTheDocument();
    
    // Check images are rendered
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('displays content in correct order on desktop', () => {
    renderWithTheme(<IntroSection />);
    
    // In desktop view, the image should come before the text in the right column
    const rightColumn = screen.getAllByRole('img', { name: /Business Law/ })[1]?.parentElement;
    const divider = screen.getByTestId('divider');
    
    // Check that both elements exist
    expect(rightColumn).toBeInTheDocument();
    expect(divider).toBeInTheDocument();
    
    // Get all direct children of the right column
    const rightColumnChildren = Array.from(rightColumn?.children || []);
    
    // Find the indices of the elements we care about
    const imageIndex = rightColumnChildren.findIndex(el => 
      el === screen.getAllByRole('img', { name: /Business Law/ })[1]
    );
    const dividerIndex = rightColumnChildren.findIndex(el => 
      el === divider
    );
    
    // In desktop view, image should come before divider
    expect(imageIndex).toBeLessThan(dividerIndex);
  });

  it('displays content in correct order on mobile', () => {
    // Mock mobile view
    useMediaQuery.mockReturnValue(true);
    
    renderWithTheme(<IntroSection />);
    
    // In mobile view, the text should come before the image in the right column
    const rightColumn = screen.getAllByRole('img', { name: /Business Law/ })[1]?.parentElement;
    const divider = screen.getByTestId('divider');
    
    // Check that both elements exist
    expect(rightColumn).toBeInTheDocument();
    expect(divider).toBeInTheDocument();
    
    // Get all direct children of the right column
    const rightColumnChildren = Array.from(rightColumn?.children || []);
    
    // Find the indices of the elements we care about
    const imageIndex = rightColumnChildren.findIndex(el => 
      el === screen.getAllByRole('img', { name: /Business Law/ })[1]
    );
    const dividerIndex = rightColumnChildren.findIndex(el => 
      el === divider
    );
    
    // In mobile view, divider should come before image
    expect(dividerIndex).toBeLessThan(imageIndex);
  });

  it('matches snapshot', () => {
    const { container } = renderWithTheme(<IntroSection />);
    expect(container).toMatchSnapshot();
  });
});
