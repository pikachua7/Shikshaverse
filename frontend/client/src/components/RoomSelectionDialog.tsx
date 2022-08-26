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
import { useAppSelector } from './hooks'

import phaserGame from './PhaserGame'
import Bootstrap from '../scenes/Bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Profile from './Profile'

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
  background: #ffffff;
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
    font-size: 16px;
  }
`

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.h1`
  font-size: 16px;
  color: #000000;
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

  h4 {
    color: #33ac96;
  }
`

const ProgressBar = styled(LinearProgress)`
  width: 360px;
`

////DO NOT DELETE THIS COMMENT
/*
 <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => (lobbyJoined ? setShowCustomRoom(true) : setShowSnackbar(true))}
                  >
                    See College List in Maharashtra
                  </Button>
*/

export default function RoomSelectionDialog(props: any) {
  const [showCustomRoom, setShowCustomRoom] = useState(false)
  const [stateSelected, setState] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

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
    setState(true)
  }


  const handleProfileShow = () => {
    setShowProfile(true)
  }



  if (!stateSelected && props.city=='Mumbai') {
    return (


      
      <>
        <div
          className="container-xl py-3 " 
          style={{ marginTop: '150px', backgroundColor: 'white', textAlign: 'center' }}
        >
          <h2>List Of Colleges in {props.city}</h2>
        </div>
        <div className="container-xl" style={{ marginTop: '20px',fontSize:'16px' }}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Virtual Tour Link</th>
              </tr>
            </thead>
            
            <tbody>
              <br />

              <tr>
                <th scope="row">1</th>
                <td>Indian Intstitute Of Technology Bombay.</td>
                <td>
                  <button onClick={handleStateSelection} className="button btn-primary" style={{width:'120px'}}>
                    Visit College
                  </button>
                </td>
              </tr>
              <br />
             
            </tbody>
          </table>
        </div>

        <Footer />
      </>
    )
  
  }
  else if(!stateSelected){
    return(
      
      <>
        <div
          className="container-xl py-3 " 
          style={{ marginTop: '150px', backgroundColor: 'white', textAlign: 'center' }}
        >
          <h2>No College Found in {props.city}</h2>
        </div>
        </>
    )
  }
 
  else {
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
            ) : showProfile ? (
              <>




                <div style={{fontSize:'16px'}}>
                <Title>
                  Be Ready for the Virtual Tour, brought to you by शिक्षाVerse  ! 
                </Title>
                <Content>
                  <img src={logo} style={{border:"2px solid"}} alt="logo" />
                  <Button variant="contained" color="secondary" style={{color:'white',fontSize:'16px'}} onClick={handleConnect}>
                    Join Visitor Tour
                  </Button>
                 
                  
                  
                 
                </Content>
                </div>
              
             
</>
            ) : (
              <div className="container-xxl" style={{fontSize:'16px' }}>
                  <img src="frontend\client\public\img\logo.png" alt="" />
                  <h2 style={{ color: 'blue' }}>Indian Institute of Technology Bombay</h2>
                  <p>Departments in IIT Bombay</p>
                  <button onClick={handleProfileShow} className="button btn-primary" style={{width:'120px',height:'50px',float:'right'}}>
                    Visit College
                  </button>
                  <img src="img/depts.png" useMap="#iitb" style={{}}></img>

                  <map name="iitb">
                   <Link to='/fy'>
                   <area
                      shape="circle"
                      coords="109,121,75"
                      href=""
                      alt="First Year Building"
                    />
                   </Link> 
                    <area
                      shape="circle"
                      coords="303,130,75"
                      href=""
                      alt="Computer Science and Engineering Building"
                    />
                    <area
                      shape="circle"
                      coords="491,140,75"
                      href=""
                      alt="Mechanical Engineering Building"
                    />
                    <area
                      shape="circle"
                      coords="105,298,75"
                      href=""
                      alt="Physical Education Building"
                    />
                    <area
                      shape="circle"
                      coords="312,302,75"
                      href=""
                      alt="Bio-medical Engineering Building"
                    />
                    <area
                      shape="circle"
                      coords="490,296,75"
                      href=""
                      alt="Civil Engineering Building"
                    />
                    <area
                      shape="circle"
                      coords="120,457,75"
                      href=""
                      alt="Electronics Engineering Building"
                    />
                    <area shape="circle" coords="303,459,75" href="" alt="Hostel Building" />
                    <area
                      shape="circle"
                      coords="492,468,75"
                      href=""
                      alt="Industrial Engineering Building"
                    />
                  </map>
                </div>
             
            )}
          </Wrapper>
          {!lobbyJoined && (
            <ProgressBarWrapper>
              <h4> Connecting to server...</h4>
              <ProgressBar color="secondary" />
            </ProgressBarWrapper>
          )}
        </Backdrop>
      </>
    )
  }
}

/*<Title>
                  Be Ready for the Virtual Tour, brought to you by शिक्षाVerse  ! 
                </Title>
                <Content>
                  <img src={logo} style={{border:"2px solid"}} alt="logo" />
                  <Button variant="contained" color="secondary" style={{color:'white'}} onClick={handleConnect}>
                    Join as a visitor
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setShowCreateRoomForm(true)}
                    style={{color :'white'}}
                  >
                    Join/Create as a College Admin
                  </Button>
                  
                  
                 
                </Content>*/
