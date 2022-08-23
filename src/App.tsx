/**
 * Main module for the application.
 *
 */
import React, { useState } from 'react'
import Header from './components/layout/Header'
import Output from './components/Output'
import TextinputForm from './components/TextinputForm'

import classes from './App.module.css'

/**
 * Main component for the application.
 */
function App() {
  const [questionMode, setQuestionMode] = useState(true)
  const [outputText, setOutputText] = useState('What is your name?')

  // NOTE: Add jsDoc.
  const submitHandler = (input: string) => {
    setQuestionMode(false)
    setOutputText(`Hello ${input}!`)
  }
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.main}>
        <Output text={outputText} />
        <TextinputForm onSubmit={submitHandler} isActive={questionMode} />
      </div>
    </div>
  )
}

export default App
