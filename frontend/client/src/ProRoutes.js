import React from 'react'
import {Route,Routes} from "react-router-dom";
import HomePage from './HomePage'
import AboutPage from './AboutPage';
import ContactPage from './ContactPage'
import Map from './Map'
import Main from './Main';

import 'regenerator-runtime/runtime'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
////import './index.scss'
import './PhaserGame'
import muiTheme from './MuiTheme'
import reportWebVitals from './reportWebVitals'
import store from './stores'


function ProRoutes() {
  return (
    <div>
    <Routes>
        <Route exact path="/" element={<HomePage/> }/>
        <Route exact path="/about" element={<AboutPage/>}/> 
        <Route exact path="/contact" element={<ContactPage/>}/> 
       <Route exact path="/map" element={<Map/>}/>
       <Route exact path="/tour" element={<Provider store={store}>
                                    <ThemeProvider theme={muiTheme}>
                                            <Main />
                                            </ThemeProvider>
                                            </Provider>}/>
    </Routes>


  </div>
  )
}

export default ProRoutes