/**
 * Component outputting text and speech.
 *
 */
import React from 'react'

import classes from './Output.module.css'

// Define prop-types.
type Props = {
  text?: string
}

/**
 * Outputs text and speach.
 *
 * @param {string} text - Text to output.
 * @returns {JSX} - JSX.
 */
const Output = ({ text }: Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['output-container']}>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default Output
