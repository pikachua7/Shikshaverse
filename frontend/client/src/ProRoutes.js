import React from 'react'
import {Route,Routes} from "react-router-dom";
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage'
import Map from './components/Map'
import Main from './components/Main';
import Login from './components/Login';
import 'regenerator-runtime/runtime'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import './components/PhaserGame'
import muiTheme from './components/MuiTheme'
import reportWebVitals from './reportWebVitals'
import store from './stores'
import FirstYear from './components/FirstYear';
import Profile from './components/Profile';

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
                                            <Main/>
                                            </ThemeProvider>
                                            </Provider>}/>
                                            <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/fy" element={<FirstYear/>}/>
       
    </Routes>


  </div>
  )
}

export default ProRoutes