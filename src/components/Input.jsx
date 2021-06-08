import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  inputContainer: {
    position: 'relative',
    margin: '2rem 0'
  },
  input: {
    color: theme.palette.primary.dark,
    fontSize: '1.6rem',
    padding: '1rem 1rem 1rem 0.5rem',
    width: '100%',
    border: 'none',
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    background: 'transparent',
    margin: '2.5rem 0',
    '&:focus': {
      outline: 'none'
    },
    '&:focus ~ label': {
      top: '-1.4rem',
      fontSize: '1.1rem',
      color: theme.palette.secondary.main
    }
  },
  label: {
    color: '#757575',
    color: theme.palette.secondary.main,
    position: 'absolute',
    left: '0.5rem',
    top: '1.4rem',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: '300ms ease all',
    pointerEvents: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem'
    }
  },
  shrunkLabel: {
    top: '-1.4rem',
    fontSize: '1.1rem',
    color: theme.palette.secondary.main
  },
  textarea: {
    border: `1px solid ${theme.palette.secondary.main}`,
    marginTop: '5rem',
    padding: '1rem'
  },
  textareaLabel: {
    left: '1.5rem'
  }
}))

const Input = ({ isTextarea, label, handleChange, ...inputProps }) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <div className={classes.inputContainer}>
      {isTextarea ? (
        <textarea
          className={clsx(classes.input, classes.textarea)}
          onChange={handleChange}
          {...inputProps}
        />
      ) : (
        <input
          className={classes.input}
          onChange={handleChange}
          {...inputProps}
        />
      )}

      {label && (
        <label
          className={clsx(
            classes.label,
            inputProps.value.length > 0 && classes.shrunkLabel,
            isTextarea && classes.textareaLabel
          )}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Input
