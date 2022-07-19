import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './index.css'
import ComingSoon from './pages/ComingSoon';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/blog' element={<ComingSoon />} />
        <Route path='/profile' element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
