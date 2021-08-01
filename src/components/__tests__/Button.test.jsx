import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Button from '../Button'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0E5C60', light: '#4A8B8F' },
    secondary: { main: '#CCAB63' }
  }
})

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  )
}

describe('Button Component', () => {
  it('renders button with text', () => {
    renderWithTheme(<Button text="Click Me" />)
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
  })

  it('renders as link when isLink prop is true', () => {
    renderWithTheme(<Button isLink text="Visit Link" href="/test" />)
    const link = screen.getByRole('link', { name: 'Visit Link' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders link with default href when no href provided', () => {
    renderWithTheme(<Button isLink text="Default Link" />)
    const link = screen.getByRole('link', { name: 'Default Link' })
    expect(link).toHaveAttribute('href', '/')
  })

  it('calls handleClick when button is clicked', () => {
    const mockClick = jest.fn()
    renderWithTheme(<Button text="Click Me" handleClick={mockClick} />)
    
    fireEvent.click(screen.getByRole('button', { name: 'Click Me' }))
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  it('applies extra className when provided', () => {
    renderWithTheme(<Button text="Styled Button" extraClassName="custom-class" />)
    const button = screen.getByRole('button', { name: 'Styled Button' })
    expect(button).toHaveClass('custom-class')
  })

  it('has correct styling attributes', () => {
    renderWithTheme(<Button text="Styled Button" />)
    const button = screen.getByRole('button', { name: 'Styled Button' })
    
    const styles = window.getComputedStyle(button)
    expect(styles.textTransform).toBe('uppercase')
    expect(styles.fontSize).toBe('1.4rem')
  })

  it('renders button type by default when isLink is false', () => {
    renderWithTheme(<Button text="Button" isLink={false} />)
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
