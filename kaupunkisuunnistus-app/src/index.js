import React from 'react'
import ReactDOM from 'react-dom/client'
import  { BrowserRouter } from 'react-router-dom'
import './Style.css';

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
        <App />
    </BrowserRouter>
)