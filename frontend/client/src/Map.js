import React from 'react';
import AreaSelector from './AreaSelector';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Map = () => {
  return (
    <>

    <div className="container-xl py-3" style={{backgroundColor:"white",marginTop:"50px"}}>
          <h4>
            Select a State from Map Below
          </h4>
          <p>Just Hover Over different States and to make a selection, simply Click. </p>
    </div>
      <div className="container-xl">

      <AreaSelector />
      </div>
          
      
    </>
  );
}

export default Map;
