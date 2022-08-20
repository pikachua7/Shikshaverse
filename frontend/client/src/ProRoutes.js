import React from 'react'
import {Route,Routes} from "react-router-dom";
import HomePage from './HomePage'
import AboutPage from './AboutPage';
import ContactPage from './ContactPage'
import Map from './Map'
function ProRoutes() {
  return (
    <div>
    <Routes>
        <Route exact path="/" element={<HomePage/> }/>
        <Route exact path="/about" element={<AboutPage/>}/> 
        <Route exact path="/contact" element={<ContactPage/>}/> 
       {/* <Route exact path="/map" element={<Map/>}/>*/}
    </Routes>


  </div>
  )
}

export default ProRoutes