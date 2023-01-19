import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { easyChainTheme } from './styles/easyChainTheme'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={easyChainTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
