/**
 * Custom hook for SpeechSynthesis Web API.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { useEffect, useState } from 'react'

/**
 * The interface of the return-object of the hook.
 *
 */
 interface SpeechSynthesisHookReturn {
  synth: SpeechSynthesis
  voices: SpeechSynthesisVoice[] | null
  createUtter: (text: string, onError?: () => void) => SpeechSynthesisUtterance
}

/**
 * Custom hook to use the SpeechSynthesis Web API.
 * 
 * @returns {SpeechSynthesisHookReturn} - Object containing SpeechSynthesis instace, array of available voices and function to create utter.
 */
const useSpeechSynthesis: () => SpeechSynthesisHookReturn = () => {
  const [synth] = useState<SpeechSynthesis>(window.speechSynthesis)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[] | null>(null)

  // Update voices when the list has changed.
  useEffect(() => {
    setVoices(synth.getVoices())
    synth.onvoiceschanged = () => {
      setVoices(synth.getVoices())
    }
  }, [synth])

  /**
   * Create utter that can be added to the speechsynthesis-queu and played.
   *
   * @param {string} text - Text to speak.
   * @param {UtterOptions} options - Optional options-object that can set the language, pitch, speed(rate), voice and volume to be used when playing.
   * @param {function} onError - Handler on error.
   * @return {*} 
   */
  const createUtter: (text: string, onError?: () => void) => SpeechSynthesisUtterance = (text: string, onError?: () => void) => {
    const utter: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text)

    // Add errorhandler if sent as argument.
    if (onError) {
      utter.onerror = onError
    }

    return utter
  }

  return {
    synth,
    voices,
    createUtter
  }
}

export default useSpeechSynthesis
