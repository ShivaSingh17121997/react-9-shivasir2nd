import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

//step 3 wrap the app component with browerRouter

createRoot(document.getElementById('root')).render(

  // routes to the app  // heigher order component => when a compoent is wraped with another compoenent and add new properties to it, is called as hoc
  <BrowserRouter>
    <App />
  </BrowserRouter>


)
