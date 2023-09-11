import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Kycdetail.css'
import { LinkContainer } from 'react-router-bootstrap';
const KycDetailCorporate2 = () => {
  return (
    <>
     <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='notification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='divcss1'>
                        KYC Details
                    </div>
                    <div className='divcss2' >
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
                    <LinkContainer to={'/Addcorporate'}><Button className='buttonkyc2corporat'>Save and Next</Button></LinkContainer>
                </Col>
            </Row>
    </>
  )
}

export default KycDetailCorporate2