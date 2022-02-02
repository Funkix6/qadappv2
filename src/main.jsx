import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ReporterProvider} from './context/ReporterContext';


ReactDOM.render(
  <ReporterProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReporterProvider>,
  document.getElementById('root')
)
