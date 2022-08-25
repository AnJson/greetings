/**
 * Main module for the application.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import React, { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Output from './components/Output'
import TextinputForm from './components/TextinputForm'

import classes from './App.module.css'
import useSpeechSynthesis from './hooks/useSpeechSynthesis'

/**
 * Main component for the application.
 * 
 * @returns {JSX} - JSX.
 */
const App = () => {
  const [questionMode, setQuestionMode] = useState(true)
  const [outputText, setOutputText] = useState('')
  const { synth, createUtter } = useSpeechSynthesis()

  // Trigger initial speak.
  useEffect(() => {
    setOutputText('Hi, what is your name?')
  }, [])

  // Trigger speech when outputText is changed.
  useEffect(() => {
    const utter = createUtter(outputText)
    utter.lang = 'es-ES' // NOTE: set dynamically to users choice.

    // If this is the answer, enable form when speech is done.
    if (!questionMode) {
      utter.onend = () => {
        // NOTE: show resetbutton?
      }
    }

    setTimeout(() => {
      synth.speak(utter)
    }, 200)
  }, [createUtter, outputText, synth])

  /**
   * Submithandler to disable form and display greeting-message.
   *
   * @param {string} input - Input-text from the form.
   */
  const submitHandler = (input: string) => {
    setQuestionMode(false)
    setOutputText(`Hi ${input}, nice to meet you!`)
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
