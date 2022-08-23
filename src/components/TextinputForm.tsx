import React, { FormEvent, useRef } from 'react'

import classes from './TextinputForm.module.css'

// Define prop-types.
type Props = {
  onSubmit: (input: string) => void
} 

/**
 * Form-component for submitting answers.
 *
 * @returns {JSX} - JSX.
 */
const TextinputForm = ({ onSubmit }: Props) => {
  const textInput = useRef<HTMLInputElement>(null)

  // Prevent default behaviour on submit, validate and trigger onSubmit-function.
  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    if (textInput.current) {
      const value: string = textInput.current.value

      if (value.trim() !== '') {
        onSubmit(textInput.current.value)
      }

      textInput.current.value = ''
    }

    
  }

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input ref={textInput} className={classes['text-input']} type='text' />
        <button className={classes['submit-button']}>Send</button>
      </form>
    </div>
  )
}

export default TextinputForm
