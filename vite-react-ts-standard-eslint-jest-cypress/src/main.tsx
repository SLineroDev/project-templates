import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@fontsource/montserrat/variable.css'
import '@/index.css'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  throw new Error('No root element found')
}
