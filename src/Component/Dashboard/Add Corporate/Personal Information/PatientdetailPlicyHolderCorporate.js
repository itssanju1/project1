import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import { Button, Col, Row } from 'react-bootstrap';
import '../../../Allcss/Patientcss.css'
import { LinkContainer } from 'react-router-bootstrap';
const PatientdetailPlicyHolderCorporate = () => {
  return (
    <>
    <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='divcss1'>
                    Patient Detail <ArrowForwardIosIcon/>Policy Holder
                    </div>
                    <div className='divcss2'>
                        <Row>
                            <Col md={4}>
                            <p>Name *</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            <Col md={4}>
                            <p>Mobile Number</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                            <Col md={3}>
                            <p>OTP</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                            <p>Email *</p>
                                <input type='text' className='patientname'></input>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={8}>
                                <div className="large-checkbox123" >
                                    <input type="checkbox" className='conditionscss' name="conditions" />
                                    <p>The same email is registered with the policy</p>
                                </div>
                            </Col>
                            
                        </Row>
                    </div>
      <LinkContainer to={'/kycdetailcorporate'}><Button className='corporatebuttonkyccss'>Save and Next</Button></LinkContainer>
        </Col>
    </Row>
    </>
  )
}

export default PatientdetailPlicyHolderCorporate