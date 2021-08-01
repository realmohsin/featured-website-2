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
    fontFamily: ['Roboto', 'sans-serif'].join(', '),
    body1: {
      fontSize: '1.6rem',
      '@media (max-width: 600px)': {
        fontSize: '1.4rem'
      }
    },
    body2: {
      fontSize: '1.4rem',
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
      color: primaryColor,
      '@media (max-width: 600px)': {
        fontSize: '2rem'
      }
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
      fontSize: '2.2rem',
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
    outlineTitle: {
      textShadow: `-1px 0 ${primaryColor}, 0 1px ${primaryColor}, 1px 0 ${primaryColor}, 0 -1px ${primaryColor}`
    },
    inSideDrawer: {
      transform: 'translateY(0)',
      opacity: 1,
      pointerEvents: 'auto',
      width: 'auto',
      height: 'auto',
      border: 'none',
      backgroundColor: 'white',
      boxShadow: 'inset 0 0 5px 2px rgba(0,0,0,.2)',
      '& a': {
        color: primaryColor,
        fontSize: '1.1rem',
        display: 'flex',
        height: '4rem',
        borderBottom: `1px solid #eee`,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '1rem',
        fontWeight: 'normal',
        paddingLeft: '3.6rem'
      }
    }
  }
})

export default theme
