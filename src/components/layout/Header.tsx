/**
 * Header layout-component.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */
import React from 'react'

import classes from './Header.module.css'

// Define prop-types.
type Props = {
  isDone: boolean
  onReset: () => void
} 

/**
 * Header layout-component.
 *
 * @param {boolean} isDone - If all greetings are done.
 * @returns {JSX} - JSX.
 */
const Header = ({isDone, onReset}: Props) => {
  return (
    <header className={classes.header}>
      { isDone && <button onClick={onReset}>Reset</button> }
    </header>
  )
}

export default Header
