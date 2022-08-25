import React from 'react'
import 'regenerator-runtime/runtime'
import { useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'

import styled from 'styled-components'
import '../indexMain.scss'
import { useAppSelector } from './hooks'

///import Home from './components/Home'

import RoomSelectionDialog from './RoomSelectionDialog'
import LoginDialog from './LoginDialog'
import ComputerDialog from './ComputerDialog'
import WhiteboardDialog from './WhiteboardDialog'
import VideoConnectionDialog from './VideoConnectionDialog'
import Chat from './Chat'
import HelperButtonGroup from './HelperButtonGroup'

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

function Main() {
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const computerDialogOpen = useAppSelector((state) => state.computer.computerDialogOpen)
  const whiteboardDialogOpen = useAppSelector((state) => state.whiteboard.whiteboardDialogOpen)
  const videoConnected = useAppSelector((state) => state.user.videoConnected)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)

  const location = useLocation()
  //console.log(location)
  const [locationState, setLocationState] = React.useState({ city: '' })

  React.useEffect(() => {
    if (location.state) {
      let _state = location.state as any
      setLocationState(_state)
      console.log(_state)
    }
  }, [location])



  ///Wo hoooo......receiving city name from MAP Dailogue!!!!!
  //console.log(locationState.city)

  
  let ui: JSX.Element
  if (loggedIn) {
    if (computerDialogOpen) {
      /* Render ComputerDialog if user is using a computer. */
      ui = <ComputerDialog />
    } else if (whiteboardDialogOpen) {
      /* Render WhiteboardDialog if user is using a whiteboard. */
      ui = <WhiteboardDialog />
    } else {
      ui = (
        /* Render Chat or VideoConnectionDialog if no dialogs are opened. */
        <>
          <Chat />
          {/* Render VideoConnectionDialog if user is not connected to a webcam. */}
          {!videoConnected && <VideoConnectionDialog />}
        </>
      )
    }
  } else if (roomJoined) {
    /* Render LoginDialog if not logged in but selected a room. */
    ui = <LoginDialog />
  } else {
    /* Render RoomSelectionDialog if yet selected a room. */

    //trying it out
    ui = <RoomSelectionDialog city = {locationState.city}/>

    /// ui = <Map/>
  }

  return (
    <Backdrop>
      {ui}

      {/* Render HelperButtonGroup if no dialogs are opened. */}
      {!computerDialogOpen && !whiteboardDialogOpen && <HelperButtonGroup />}
    </Backdrop>
  )
}

export default Main
