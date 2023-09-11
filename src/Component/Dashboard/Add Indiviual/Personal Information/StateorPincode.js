import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import { Button, Col, Row } from 'react-bootstrap';
import '../../../Allcss/Stateorpincode.css'
import { LinkContainer } from 'react-router-bootstrap';

const StateorPincode = () => {
  return (
    <>
    <Row>
        <Col md={3}></Col>
        <Col md={9}>
        <div className='StateorPincodecss'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationcsspincode' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='StateorPincodecsshead'>
                    State or Pincode
                    </div>
                    <div className='StateorPincodecsstext'>
                        <Row>
                            <Col md={6}>
                                <p> State or Pincode</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            
                        </Row>
                        
                            
                           
                    </div>
                    <LinkContainer to={'/Patientdetailpolicyholder'}><Button className='statepincssbutton'>Save and Next</Button></LinkContainer>
        
        </Col>
    </Row>
    </>
  )
}

export default StateorPincode