/**
 * Custom hook for SpeechSynthesis Web API.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */

/**
 * The interface of the Intersection Observer option-object.
 *
 */
 interface UtterOptions {
  lang: string
  pitch: number
  rate: number
  voice: string
  volume: number
}

/**
 * The interface of the Intersection Observer option-object.
 *
 */
 interface HookReturn {
  synth: SpeechSynthesis
  voices: SpeechSynthesisVoice[]
  createUtter: any // NOTE: fix type.
}

/**
 * Custom hook to use the SpeechSynthesis Web API.
 * 
 * @param {function} voicesChangedHandler - Optional handler for voiceschanged-event.
 * @returns {HookReturn} - Object containing SpeechSynthesis instace, array of available voices and function to create utter.
 */
const useSpeechSynthesis: () => HookReturn = (voicesChangedHandler?: () => void) => {
  const synth: SpeechSynthesis = window.speechSynthesis
  const voices: SpeechSynthesisVoice[] = synth.getVoices()

  /**
   * Create utter that can be added to the speechsynthesis-queu and played.
   *
   * @param {string} text - Text to speak.
   * @param {() => void} onError - Handler on error.
   * @param {UtterOptions} [options] - Optional options-object that can set the language, pitch, speed(rate), voice and volume to be used when playing.
   * @return {*} 
   */
  const createUtter = (text: string, onError?: () => void, options?: UtterOptions) => {
    const utter = new SpeechSynthesisUtterance(text)

    // NOTE: Add options.

    return utter
  }

  return {
    synth,
    voices,
    createUtter
  }
}

export default useSpeechSynthesis
