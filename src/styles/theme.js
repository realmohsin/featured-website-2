import { createMuiTheme } from '@material-ui/core/styles'

const primaryColor = '#0E5C60'
const primaryDarkColor = '#002B2E'
const primaryVariant1 = '#00464A'
const secondaryColor = '#CCAB63'
const goldVariant1 = '#E1C079'
const facebookColor = '#3C5B9B'
const googleStarColor = '#E7711B'
const fadedTextColor = '#94B7B8'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDarkColor
    },
    secondary: {
      main: secondaryColor
    },
    common: {
      primaryVariant1,
      goldVariant1,
      facebookColor,
      googleStarColor,
      fadedTextColor
    }
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(', '),
    body1: {
      fontSize: '1.5rem'
    },
    body2: {
      fontSize: '1.3rem',
      lineHeight: '1.5'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*, *::before, *::after': {
          margin: 0,
          padding: 0
        },
        html: {
          fontSize: '62.5%'
        },
        a: {
          display: 'block',
          textDecoration: 'none',
          color: 'inherit'
        },
        img: {
          display: 'block'
        },
        'input, button, textarea, select': {
          display: 'block',
          font: 'inherit'
        },
        ul: {
          listStyle: 'none'
        },
        '::selection': {
          backgroundColor: primaryColor,
          color: 'white'
        },
        'a, button': {
          cursor: 'pointer'
        }
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1.2em'
      }
    }
  },
  custom: {
    title1: {
      fontFamily: ['Piazzolla', 'serif'].join(', '),
      fontSize: '5.1rem',
      color: primaryColor
    },
    title2: {
      fontFamily: ['PT Serif', 'serif'].join(', '),
      fontSize: '4.6rem',
      color: primaryColor,
      fontWeight: 'normal',
      marginBottom: '8rem',
      textAlign: 'center'
    },
    title3: {
      fontFamily: ['PT Serif', 'serif'].join(', '),
      fontSize: '3.4rem',
      color: secondaryColor,
      fontWeight: 'normal'
    },
    title4: {
      fontSize: '2rem',
      color: primaryColor,
      textTransform: 'uppercase',
      wordSpacing: '0.5px'
    },
    title5: {
      fontSize: '1.5rem',
      color: secondaryColor,
      textTransform: 'uppercase',
      fontWeight: 'normal'
    },
    test: {
      color: primaryColor
    }
  }
})

export default theme
