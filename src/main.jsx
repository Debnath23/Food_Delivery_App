import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from './context/stateProvider.jsx'
import reducer from './context/reducer.js'
import { initialState } from './context/initialState.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
    </Router>
)
