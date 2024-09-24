import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AtuthContexProvider from './Context/AtuthContexProvider.jsx'

createRoot(document.getElementById('root')).render(
  // higher order component ==> when a compoentn takes another function as an argument and enhance its properties
  <StrictMode>
    <BrowserRouter>
      <AtuthContexProvider>
        <App />
      </AtuthContexProvider>
    </BrowserRouter>
  </StrictMode>
)
