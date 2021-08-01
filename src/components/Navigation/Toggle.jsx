import React from 'react'
import { makeStyles } from '@material-ui/core'

// dont need the hover effect since it wont be visible on desktop

const useStyles = makeStyles(theme => ({
  toggle: {
    width: '40px',
    height: '46px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    cursor: 'pointer',
    '& > div': {
      width: '95%',
      height: '2px',
      backgroundColor: theme.palette.secondary.main,
      transition: 'transform 0.2s'
    },
    '&:hover > div:first-of-type': {
      transform: 'translateY(-2px)'
    },
    '&:hover > div:last-of-type': {
      transform: 'translateY(2px)'
    }
  }
}))

const Toggle = ({ onToggle }) => {
  const classes = useStyles()
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div 
      className={classes.toggle} 
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Toggle navigation menu"
    >
      <div />
      <div />
      <div />
    </div>
  )
}

export default Toggle
