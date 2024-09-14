import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'
import Nav from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>,
)
