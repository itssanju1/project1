import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import '../../../Allcss/Lendingmodule.css'
import { LinkContainer } from 'react-router-bootstrap';
const Lendingmodule = () => {
  return (
    <>
    <Row>
        <Col md={3}>

        </Col>
        <Col md={9}>
        <div className='lengindmodulcss'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual <ArrowForwardIosIcon className='arrowcss' /> Credit Document
                        <NotificationsIcon style={{ fontSize: 40 }} className='lendingnotification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='lengindmodulcss1'>
                    Lending Module
                    </div>
                    <div className='lengindmodulcss2'>
                        <input type='text' name='moduls' className='textcssmodule'></input>

                    </div>
                    <LinkContainer to={'/Uploadcancelledcheque'}><Button className='lendingbutton'>save and Next</Button></LinkContainer>
        </Col>
    </Row>
    </>
  )
}

export default Lendingmodule