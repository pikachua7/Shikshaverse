import React, { useState } from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LinearProgress from '@mui/material/LinearProgress'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { CustomRoomTable } from './CustomRoomTable'
import { CreateRoomForm } from './CreateRoomForm'
import { useAppSelector } from '../hooks'

import phaserGame from '../PhaserGame'
import Bootstrap from '../scenes/Bootstrap'

const Backdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`

const Wrapper = styled.div`
  background: #222639;
  border-radius: 16px;
  padding: 36px 60px;
  box-shadow: 0px 0px 5px #0000006f;
`

const CustomRoomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .tip {
    font-size: 18px;
  }
`

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.h1`
  font-size: 24px;
  color: #eee;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 8px;
    height: 120px;
  }
`

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #33ac96;
  }
`

const ProgressBar = styled(LinearProgress)`
  width: 360px;
`

export default function RoomSelectionDialog() {
  const [showCustomRoom, setShowCustomRoom] = useState(false)
  const [stateSelected, setState] = useState(false)

  const [showCreateRoomForm, setShowCreateRoomForm] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)

  const handleConnect = () => {
    if (lobbyJoined) {
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .joinOrCreatePublic()
        .then(() => bootstrap.launchGame())
        .catch((error) => console.error(error))
    } else {
      setShowSnackbar(true)
    }
  }

  const handleStateSelection = () => {
    setState(true);
  }


  if(!stateSelected){
    return (
      <>
      <h1>Home Page of Shikshaverse</h1>
      <h1>TASK 1 : Map ka photo dalna ek do aur if else laga ke idhar hi ghata krneka</h1>
      <h1>Niche button dikhri hai ? Daba diya ?  Nai dabana tha ab ek aisa illusion banana h ki apan ne bharat map pr click krke state open kiya hai</h1>
      <h1>Ab kahe wait kr raha hai be daba button</h1>
      <button onClick={handleStateSelection}>Select State</button>
      </>
    )
  } else {
    return (
      <>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={showSnackbar}
          autoHideDuration={3000}
          onClose={() => {
            setShowSnackbar(false)
          }}
        >
          <Alert
            severity="error"
            variant="outlined"
            // overwrites the dark theme on render
            style={{ background: '#fdeded', color: '#7d4747' }}
          >
            Trying to connect to server, please try again!
          </Alert>
        </Snackbar>
        <Backdrop>
          <Wrapper>
            {showCreateRoomForm ? (
              <CustomRoomWrapper>
                <Title>Create Custom Room</Title>
                <BackButtonWrapper>
                  <IconButton onClick={() => setShowCreateRoomForm(false)}>
                    <ArrowBackIcon />
                  </IconButton>
                </BackButtonWrapper>
                <CreateRoomForm />
              </CustomRoomWrapper>
            ) : showCustomRoom ? (
              <CustomRoomWrapper>
                <Title>
                  Colleges of Maharashtra
                  <Tooltip
                    title="We update the results in realtime, no refresh needed!"
                    placement="top"
                  >
                    <IconButton>
                      <HelpOutlineIcon className="tip" />
                    </IconButton>
                  </Tooltip>
                </Title>
                <BackButtonWrapper>
                  <IconButton onClick={() => setShowCustomRoom(false)}>
                    <ArrowBackIcon />
                  </IconButton>
                </BackButtonWrapper>
                <CustomRoomTable />
              </CustomRoomWrapper>
            ) : (
              <>
                <Title>Welcome to ShikshaVerse! Do options hona ek for university login aur dusra for samanya janta</Title>
                <Content>
                  <img src={logo} alt="logo" />
                  <Button variant="contained" color="secondary" onClick={handleConnect}>
                    Open Lobby -  Yeh option kisi kaam ka nai hai hata do isko
                  </Button>
                  <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setShowCreateRoomForm(true)}
                >
                  Create a New College - This opetion should be available only if connected wallet has a NFT issued by govt which proves that its a univeristy
                </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => (lobbyJoined ? setShowCustomRoom(true) : setShowSnackbar(true))}
                  >
                    See College List in Maharashtra
                  </Button>
                  
                </Content>
              </>
            )}
          </Wrapper>
          {!lobbyJoined && (
            <ProgressBarWrapper>
              <h3> Connecting to server...</h3>
              <ProgressBar color="secondary" />
            </ProgressBarWrapper>
          )}
        </Backdrop>
      </>
    )
  }

}
