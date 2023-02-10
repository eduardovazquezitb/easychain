import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { easyChainTheme } from './styles/easyChainTheme'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={easyChainTheme}>
    <App />
  </ThemeProvider>
)
