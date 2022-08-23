/**
 * Main module for the application.
 *
 */
import React from 'react'
import Header from './components/layout/Header'
import Output from './components/Output'
import TextinputForm from './components/TextinputForm'

import classes from './App.module.css'

/**
 * Main component for the application.
 */
function App() {
  // NOTE: Add jsDoc.
  const submitHandler = (input: string) => {
    console.log(input)
  }
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.main}>
        <Output text='What is your name?' />
        <TextinputForm onSubmit={submitHandler}/>
      </div>
    </div>
  )
}

export default App
