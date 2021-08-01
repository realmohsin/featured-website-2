import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { useStaticQuery } from 'gatsby';
import FeaturedOnSection from '../FeaturedOnSection';

// Mock Gatsby Image
jest.mock('gatsby-plugin-image', () => {
  const React = require('react');
  const MockImage = (props) => (
    <img {...props} alt={props.alt} data-testid="gatsby-image" />
  );
  return {
    __esModule: true,
    GatsbyImage: MockImage,
    getImage: () => ({
      layout: 'constrained',
      width: 100,
      height: 50,
      images: {
        fallback: {
          src: 'test-image.jpg',
          srcSet: 'test-image.jpg 1x',
        },
      },
    }),
  };
});

// Mock theme
const theme = createMuiTheme({
  custom: {
    title3: {
      fontSize: '2rem',
      lineHeight: 1.2,
      fontWeight: 600,
    },
  },
  palette: {
    secondary: {
      main: '#000000',
    },
  },
  breakpoints: {
    down: () => false,
  },
});

describe('FeaturedOnSection', () => {
  const mockData = {
    featured: {
      nodes: [
        { childImageSharp: { gatsbyImageData: {} } },
        { childImageSharp: { gatsbyImageData: {} } },
        { childImageSharp: { gatsbyImageData: {} } },
      ],
    },
    recognition: {
      nodes: [
        { childImageSharp: { gatsbyImageData: {} } },
        { childImageSharp: { gatsbyImageData: {} } },
      ],
    },
  };

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockData);
  });

  const renderWithTheme = (component) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  it('renders the featured on section with title', () => {
    renderWithTheme(<FeaturedOnSection />);
    
    // Check if the section is rendered
    const section = screen.getByRole('heading', { name: /featured on/i }).closest('section');
    expect(section).toBeInTheDocument();
    
    // Check if the title is rendered
    const title = screen.getByRole('heading', { name: /featured on/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  it('renders featured company images', () => {
    renderWithTheme(<FeaturedOnSection />);
    
    // Check if featured images are rendered
    const featuredImages = screen.getAllByAltText('Featured In');
    expect(featuredImages.length).toBe(mockData.featured.nodes.length);
    
    // Check if images are rendered with the correct alt text
    featuredImages.forEach((img) => {
      expect(img).toHaveAttribute('alt', 'Featured In');
    });
  });

  it('renders recognition section with title', () => {
    renderWithTheme(<FeaturedOnSection />);
    
    // Check if the recognition title is rendered
    const recognitionTitle = screen.getByRole('heading', { name: /recognition/i, level: 2 });
    expect(recognitionTitle).toBeInTheDocument();
    
    // Check if recognition images are rendered
    const recognitionImages = screen.getAllByAltText('Recognition Award');
    expect(recognitionImages.length).toBe(mockData.recognition.nodes.length);
  });

  it('matches snapshot', () => {
    const { container } = renderWithTheme(<FeaturedOnSection />);
    expect(container).toMatchSnapshot();
  });
});
