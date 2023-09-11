import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Lendingmodule.css'
import { LinkContainer } from 'react-router-bootstrap';
const LendingmoduleCorporate = () => {
  return (
    <>
     <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' />  Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Credit Document
                        <NotificationsIcon style={{ fontSize: 40 }} className='notification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='divcss1'>
                    Lending Module
                    </div>
                    <div className='divcss2'>
                        <input type='text' name='moduls' className='textcssmodule'></input>

                    </div>
                    <LinkContainer to={'/Uploadcancelledchequecorporate'}><Button className='LendingmoduleCorporatebuttoncss'>Save and Next</Button></LinkContainer>
        </Col>
    </Row>
    </>
  )
}

export default LendingmoduleCorporate