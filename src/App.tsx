/**
 * Main module for the application.
 *
 */
import React from 'react'
import Header from './components/layout/Header'
import TextinputForm from './components/TextinputForm'

import classes from './App.module.css'
import Output from './components/Output'

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.main}>
        <Output text='What is your name?' />
        <TextinputForm />
      </div>
    </div>
  )
}

export default App
