import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../../../Allcss/Policydoc.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'

const Plicydocument = () => {
 
  return (
    <>
   
        <Row>
            <Col md={3}></Col>
            <Col md={9}>
              <div className='divcss0'>
                Dashboard <ArrowForwardIosIcon  className='arrowcss'/> Add Individual <ArrowForwardIosIcon className='arrowcss'/> Plicy Document
               <NotificationsIcon style={{ fontSize: 40 }} className='notification'/>
               <img src={pic} className='piccss'></img>
                </div>
               <div className='divcss1'>
                Policy document
                </div>
                <div className='divcss2'>
                  <Row>
                    <Col md={3}>
                    <label className='labelcss'>Aadhar card upload*</label><br></br>
                    <input type='file' ></input>
                    <p>Supported file formats -x,y,z</p>
                    </Col>
                    <Col md={3}>
                    <label className='labelcss'>Last Insurance paid receipt*</label><br></br>
                    <input type='file' ></input>
                    <p>Supported file formats -x,y,z</p>
                    </Col>
                    </Row>
                  <Row>
                  <Col md={3}>
                    <label className='labelcss'>Pan card upload*</label><br></br>
                   <input type='file'  ></input>
                   <p>Supported file formats -x,y,z</p>
                    </Col>
                  </Row>
                  

                </div> 
               <LinkContainer to={'/Addindividual'}><Button  className='policybuttoncss'>Save and Next</Button></LinkContainer> 
               {/* <LinkContainer to={'/Dashboard'}><Button className='buttoncss1'>Next</Button></LinkContainer>  */}
               
            {/* <LinkContainer  ><Button>click</Button></LinkContainer> */}
               
            </Col>
        </Row>
    
    </>
  )
}

export default Plicydocument