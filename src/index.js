import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModeProvider } from './Components/Mode'
import App from './App/App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ModeProvider><App /></ModeProvider>)