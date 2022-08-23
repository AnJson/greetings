import React, { FormEvent } from 'react'

import classes from './TextinputForm.module.css'

/**
 * Form-component for submitting answers.
 *
 * @returns {JSX} - JSX.
 */
const TextinputForm = () => {
  // NOTE: Temporary submithandler.
  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    console.log('submitted')
  }

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input className={classes['text-input']} type='text' />
        <button className={classes['submit-button']}>Send</button>
      </form>
    </div>
  )
}

export default TextinputForm
