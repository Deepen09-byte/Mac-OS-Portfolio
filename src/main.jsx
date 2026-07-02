import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

window.process = {
  env: {},
};

createRoot(document.getElementById('root')).render(
    <App />
)
