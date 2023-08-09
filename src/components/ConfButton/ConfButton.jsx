import React from 'react'
import classes from './ConfButton.module.css'

export default function ConfButton({children, ...props}) {
  return (
    <button {...props} className={classes.ConfButton}>
        {children}
    </button>
  )
}
