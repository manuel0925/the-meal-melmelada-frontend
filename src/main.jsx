import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainProvider } from './state'
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/la_melmelada'>
    <MainProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MainProvider>
  </BrowserRouter>

)
