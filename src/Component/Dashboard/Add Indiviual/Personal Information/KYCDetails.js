import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Kycdetail.css'
import { LinkContainer } from 'react-router-bootstrap';

const KYCDetails = () => {
  return (
    <>
   <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <div className='kycdetailcss1'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notificationkycdetail' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='kycdetailcss2'>
                        KYC Details
                    </div>
                    <div className='kycdetailcss3' >
                        <Row>
                           <Col md={4}>
                           
                           <p>Aadhar Number *</p>
                                <input type='text' className='agentname'></input>
                           </Col>
                           <Col md={8}>
                            <p>PAN Number *</p>
                            <input type='text' className='agentname'></input>
                           </Col>
                        </Row>
                        <div className='patientcss'>
                            <h2>Patient</h2>
                            <div className="large-checkbox2" >
                                    <input type="checkbox" className='conditionscss' name="conditions" />
                                    <label > Same as that</label>
                                </div>
                                <div className='patientcssadhar'>
                            <Row>
                            <Col md={4}>
                           
                           <p>Aadhar Number *</p>
                                <input type='text' className='agentname'></input>
                           </Col>
                           <Col md={8}>
                            <p>PAN Number *</p>
                            <input type='text' className='agentname'></input>
                           </Col>
                            </Row>
                            </div>
                        </div>

                    </div>
                    <LinkContainer to={'/Kycdetails1'}><Button className='kycdetailbutton'>Save and Next</Button></LinkContainer>
                </Col>
            </Row>
    </>
  )
}

export default KYCDetails