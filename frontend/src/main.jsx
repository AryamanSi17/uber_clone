import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './contexts/UserContext'
import CaptainContext from './contexts/CaptainContext'
import SocketProvider from './contexts/SocketContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
      <UserContext>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
      </UserContext>
    </CaptainContext>
  </StrictMode>,
)
