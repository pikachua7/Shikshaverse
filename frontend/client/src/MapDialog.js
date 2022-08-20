import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import ReactTooltip from 'react-tooltip'
import StateChart from './StateChart'

import 'regenerator-runtime/runtime'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'

import { Button } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#509609',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const MapDialog = (props) => {
  const classes = useStyles()
  const [contentD, setContentD] = useState('')
  const [DTName, setDTName] = useState('')

  /// let screen = <div></div>

  return (
    //<Router>
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={props.show}
      onClose={props.closeModal}
      style={{ backgroundColor: 'black !important' }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar style={{ background: '#ffffff', color: '#000000' }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              props.closeModal()
              setDTName('')
            }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          {!DTName && (
            <Typography variant="h6" className={classes.title}>
              Select a District From {props.StateName}
            </Typography>
          )}
          {DTName && (
            <Typography variant="h6" className={classes.title}>
              Selected District: {DTName}


              <Link to="/tour">
                <Button style={{ backgroundColor: '#614bcc', color: 'white', float: 'right',padding:'10px' }}>
                  View Colleges in {DTName}
                </Button>
              </Link>

              
              {/*<Button style={{backgroundColor : 'blue',color :'white',float:'right'}}>View Colleges in {DTName}</Button>*/}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <div style={{ height: '2000px', backgroundColor: '#c070c2' }}>
        <Container maxWidth="md" style={{ backgroundColor: '#c070c2' }}>
          <StateChart
            setTooltipContent={setContentD}
            setDistrictName={setDTName}
            selectedState={props.StateName}
          />
          <ReactTooltip>{contentD}</ReactTooltip>
        </Container>
      </div>
    </Dialog>

    ///<Routes>

    /// <Route exact path="/"
    ///   element={
    //       Map
    //}/>
    //</Routes>*/}

    // {/* <Route exact path="/"
    //   element={
    //    <Provider store={store}>
    //    <ThemeProvider theme={muiTheme}>
    //        <App />
    //    </ThemeProvider>
    //    </Provider>}/>
    //     </Routes>

    ///</Router>*/}
  )
}

export default MapDialog
