import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'
import ProRoutes from './ProRoutes'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ProRoutes />
      </Router>
    </div>
  )
}

export default App
