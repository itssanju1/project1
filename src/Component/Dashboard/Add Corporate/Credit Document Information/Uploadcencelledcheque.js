import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Creaditdoc.css'
import { LinkContainer } from 'react-router-bootstrap';

const Uploadcencelledcheque = () => {
  return (
    <>
    <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' />  Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Credit Document           <NotificationsIcon style={{ fontSize: 40 }} className='notification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='divcss1'>
                        Upload Cancelled Cheque
                    </div>
                    <div className='divcss2'>
                        <Row>
                            <Col md={10}>

                                <p>Does the policy holder use same Bank for net banking as os Cancelled cheque?*</p>
                                <input type="radio" name="cheque" />
                                <label >Yes</label>
                                <input type="radio" name="cheque" className='radiocss0' />
                                <label >No</label>



                            </Col>
                            <Col md={10}>

                                <p>Upload Bank Statement*</p>
                                <input type="file" name="hypertension" />
                                <h6>Supported file formats -x,y,z</h6>



                            </Col>
                            <Col md={10}>

                                <p>Does the policy holder use same Bank's debit card as of cancelled cheque?*</p>
                                <input type="radio" name="debitcard" />
                                <label >Yes</label>
                                <input type="radio" name="debitcard" className='radiocss0' />
                                <label >No</label>



                            </Col>
                            <Col md={10}>

                                <p>Do you want to upload any other document that are relevant to your case?*</p>
                                <input type="radio" name="otherdocument" />
                                <label >Yes</label>
                                <input type="radio" name="otherdocument" className='radiocss0' />
                                <label >No</label>



                            </Col>
                        </Row>
                    </div>
                   <LinkContainer to={'/Addcorporate'}><Button className='uploadcorporatecss'>Save and Next</Button></LinkContainer>
                </Col>
            </Row>
    </>
  )
}

export default Uploadcencelledcheque