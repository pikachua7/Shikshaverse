import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Navigation } from "./components/navigation";
import ProRoutes from './ProRoutes'

function App() {
  return (
    <div>
      <Router>
      <Navigation />
        
        <ProRoutes />
      </Router>
    </div>
  )
}

export default App
