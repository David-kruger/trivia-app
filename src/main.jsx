import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// biblioteca de componentes
import { PrimeReactProvider } from 'primereact/api' 
import 'primeicons/primeicons.css';
// manejo de las rutas
import { BrowserRouter } from 'react-router-dom'
import "primereact/resources/themes/lara-dark-cyan/theme.css"


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter> 
    </PrimeReactProvider>,
  {/* </StrictMode>, */}
)
