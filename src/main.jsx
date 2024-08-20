import { createRoot } from 'react-dom/client'
import App from './core/App.jsx'
import './assets/index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
