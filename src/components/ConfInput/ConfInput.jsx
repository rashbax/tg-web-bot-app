import React from 'react'
import classes from './ConfInput.module.css'

export default function ConfInput({children, ...props}) {
  return (
    <div {...props} className={classes.conf__input}>
        {children}
    </div>
  )
}
