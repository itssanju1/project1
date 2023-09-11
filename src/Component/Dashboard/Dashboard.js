import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../Allcss/Dashboardcss.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../Images/1.png'
const Dashboard = () => {
  return (
    <>
    <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
          <h3 style={{margin:'2vh'}}>Welcome, Chetan Goyal</h3>
          <p style={{marginLeft:'4vh',marginTop:'0vh'}}>Have a great day and nice day</p>
          </Col>
          <Col md={6}>
        <LinkContainer to={'/Addcorporate'}><Button className='addcorporatecssbutton'>Add Corporate</Button></LinkContainer>
        <LinkContainer to={'/Addindividual'}><Button className='addcorporatecssbutton'>Add Individual</Button></LinkContainer>
       
                        
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationcss' />
                        <img src={pic} className='dashboardpiccss'></img>
                    
        </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className='dashboardanlysiscss'>
              <p className='dashboardanlysiscss1'>Anylysis</p>
            </div>
            
            
            </Col>
          <Col md={6}>
          <div className='dashboardanlysiscss2'>
              <p className='dashboardanlysiscss3'>Pending Application</p>
            </div>

          </Col>
          <Row>
            <Col md={7}>
            <div className='dashboardanlysiscss4'>
              <p className='dashboardanlysiscss5'>Succesful Discharged</p>
            </div>

            <div className='dashboardanlysiscss6'>
              <p className='dashboardanlysiscss7'>Team Member</p>
            </div>

            </Col>
            <Col md={5}>
            <div className='dashboardanlysiscss8'>
              <p className='dashboardanlysiscss9'>Susccesfully Admited</p>
            </div>
            </Col>
          </Row>
        </Row>
        </Col>
    </Row>
    
    
    </>
  )
}

export default Dashboard
