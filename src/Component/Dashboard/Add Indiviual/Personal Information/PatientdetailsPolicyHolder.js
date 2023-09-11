import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import { Button, Col, Row } from 'react-bootstrap';
import '../../../Allcss/Patientcss.css'
import { LinkContainer } from 'react-router-bootstrap';
const PatientdetailsPolicyHolder = () => {
  return (
    <>
    <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='patientpagecss'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationcsspatient' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='patientpagecss1'>
                    Patient Detail <ArrowForwardIosIcon/>Policy Holder
                    </div>
                    <div className='patientpagecss2'>
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
              <LinkContainer to={'/Kycdetail'}><Button className='patientbuttoncss'>Save and Next</Button></LinkContainer>
        </Col>
    </Row>
    </>
  )
}

export default PatientdetailsPolicyHolder