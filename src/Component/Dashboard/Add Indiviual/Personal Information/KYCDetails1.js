import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Kycdetail.css'
import { LinkContainer } from 'react-router-bootstrap';
const KYCDetails1 = () => {
    return (
        <>
            <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <div className='kycdetail1css'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Personal Information
                        <NotificationsIcon style={{ fontSize: 40 }} className='kycdetail1notification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='kycdetail1css1'>
                        KYC Details
                    </div>
                    <div className='kycdetail1css2' >
                        <Row>
                            <Col md={4}>
                                <label className='labelcss'>Upload Prescription *</label><br></br>
                                <input type='file'  ></input>
                                <h6>Supported file formats -x,y,z</h6>
                            </Col>
                            <Col md={8}>
                            <p>Is the cause of admission any accident?*</p>
                                <input type="radio"  name="hypertension" />
                                <label >Yes</label>
                                <input type="radio"  name="hypertension" className='radiocss0' />
                                <label >No</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                            <label className='labelcss'>Upload Diagnostic report *</label><br></br>
                                <input type='file'  ></input>
                                <h6>Supported file formats -x,y,z</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <p>Agent Name *</p>
                                <input type='text' className='agentname'></input>
                            </Col>
                            <Col md={4}>
                                <p>Number *</p>
                                <input type='text' className='agentname'></input>
                            </Col>
                        </Row>

                    </div>
                    <LinkContainer to={'/Addindividual'}><Button className='kycdetail1button'>Save and Next</Button></LinkContainer>
                </Col>
            </Row>
        </>
    )
}

export default KYCDetails1