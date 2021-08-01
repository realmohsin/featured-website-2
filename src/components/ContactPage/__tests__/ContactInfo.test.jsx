import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ContactInfo from '../ContactInfo';

describe('ContactInfo', () => {
  const theme = createMuiTheme({
  custom: {
    title2: {
      fontSize: '2.8rem',
      lineHeight: 1.2,
      fontWeight: 600,
      marginBottom: '1.5rem',
    },
    title5: {
      fontSize: '1.8rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1.6rem',
      lineHeight: 1.6,
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  breakpoints: {
    down: () => '@media (max-width: 600px)',
  },
});

  const renderWithTheme = (component) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  it('renders contact information section', () => {
    renderWithTheme(<ContactInfo />);
    
    // Check section title
    expect(screen.getByText(/Contact Romano Law/i)).toBeInTheDocument();
    
    // Check section headers
    expect(screen.getByText(/Hours/i)).toBeInTheDocument();
    expect(screen.getByText(/Address/i)).toBeInTheDocument();
    
    // Check phone number
    const phoneLink = screen.getByRole('link', { name: /\(212\) 865 - 9848/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+12128659848');
    
    // Check address
    expect(screen.getByText(/55 Broad Street, 18th Fl\./i)).toBeInTheDocument();
    expect(screen.getByText(/New York, NY 10004/i)).toBeInTheDocument();
    
    // Check subway stops section
    expect(screen.getByText(/Subway Stops/i)).toBeInTheDocument();
    expect(screen.getByText(/We are located in the Financial District of New York City/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = renderWithTheme(<ContactInfo />);
    expect(container).toMatchSnapshot();
  });
});
