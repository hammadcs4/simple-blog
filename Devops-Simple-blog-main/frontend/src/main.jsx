import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './Pages/Main.jsx'
import Posts from './Pages/Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Main/>
    <Posts/>
  </StrictMode>,
)
