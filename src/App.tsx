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
  const [questionMode, setQuestionMode] = useState<boolean>(true)
  const [isDone, setIsDone] = useState<boolean>(false)
  const [outputText, setOutputText] = useState<string>('Hi, whats your name?')
  const [name, setName] = useState<string>('')
  const [language, setLanguage] = useState<string>('en-US')
  const { synth, createUtter } = useSpeechSynthesis()

  // Trigger speak.
  useEffect(() => {
    const utter = createUtter(outputText)
    utter.lang = language

    if (!questionMode && language === 'en-US') {
      utter.onend = () => {
        setLanguage('it-IT')
        setOutputText(`Ciao ${name}, piacere di conoscerti!`)
      }
    } else if (!questionMode && language === 'it-IT') {
      utter.onend = () => {
        setLanguage('es-ES')
        setOutputText(`Hola ${name}, encantado de conocerte!`)
      }
    } else if (!questionMode && language === 'es-ES') {
      utter.onend = () => {
        setLanguage('fr-FR')
        setOutputText(`Salut ${name}, ravi de te rencontrer !`)
      }
    } else if (!questionMode && language === 'fr-FR') {
      utter.onend = () => {
        setLanguage('nl-NL')
        setOutputText(`Hoi ${name}, leuk je te ontmoeten!`)
      }
    } else if (!questionMode && language === 'nl-NL') {
      // TODO: Fix the triggering of another speak.
      utter.onend = () => {
        setIsDone(true)
      }
    }

    setTimeout(() => {
      synth.speak(utter)
    }, 500)
  }, [createUtter, synth, outputText, language, name, questionMode])

  /**
   * Submithandler to disable form and display greeting-message.
   *
   * @param {string} name - Input-text from the form.
   */
  const submitHandler: (name: string) => void = (name) => {
    setName(name)
    setQuestionMode(false)
    setOutputText(`Hi ${name}, nice to meet you!`)
  }

  /**
   * Resethandler applikation.
   *
   */
   const resetHandler: () => void = () => {
    setIsDone(false)
    setQuestionMode(true)
    setLanguage('en-EN')
    setName('')
    setOutputText('Hi, whats your name?')
  }

  return (
    <div className={classes.wrapper}>
      <Header isDone={isDone} onReset={resetHandler} />
      <div className={classes.main}>
        <Output text={outputText} />
        <TextinputForm onSubmit={submitHandler} isActive={questionMode} />
      </div>
    </div>
  )
}

export default App
