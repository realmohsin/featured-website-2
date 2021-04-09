import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.main,
    fontSize: '1.4rem',
    textTransform: 'uppercase',
    padding: '0.8rem 2.7rem',
    width: 'max-content',
    letterSpacing: '0.5px',
    wordSpacing: '0.5px',
    transition: 'all 0.3s',
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main
    }
  }
}))

const Button = ({ isLink, text, href, extraClassName, handleClick }) => {
  const classes = useStyles()

  if (isLink)
    return (
      <a
        href={href || '/'}
        className={clsx(classes.button, extraClassName || '')}
      >
        {text}
      </a>
    )
  return (
    <button
      className={clsx(classes.button, extraClassName || '')}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button