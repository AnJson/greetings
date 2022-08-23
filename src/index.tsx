/**
 * Entrypoint for the application.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement: HTMLElement | null = document.getElementById('root')

// Confirm element exists in DOM.
if (!rootElement) {
  throw new Error('No root-element found in document.')
}

const root = ReactDOM.createRoot(rootElement as HTMLElement)

// Render the application.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
