import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import '../../Allcss/Addindividual.css'
import pic from '../../Images/1.png'
import { LinkContainer } from 'react-router-bootstrap';
const Addcorporate = () => {
  return (
    <>
    <Row>
        <Col md={3}></Col>
        <Col md={9} >

            
          <div className='addindividualcss'>
            Dashboard <ArrowForwardIosIcon className='arrowcss' /> Add Individual<NotificationsIcon style={{ fontSize: 40 }} className='notificationcssdasboard' />
            <img src={pic} className='piccssdashboard'></img>
          </div>
          <Row style={{marginLeft:'7vh',marginTop:'5vh'}}>

          <div style={{ width: '22rem',height:'15em' }} className='containercssdashboard'>
             <p className='hedingcssdashboard'>Company Details</p>
             <div className='personaliconcss1'>
             <PersonAddIcon style={{fontSize:60}} className='personiconcss'/>
             </div>
             <LinkContainer to={"/companydetails"} ><button className='buttondashboardcss'>Complete</button></LinkContainer>
            </div>

            <div style={{ width: '22rem',height:'15em' }} className='containercssdashboard1'>
             <p className='hedingcssdashboard'>Personal Information</p>
             <div className='personaliconcss'>
             <PersonAddIcon style={{fontSize:60}} className='personiconcss'/>
             </div>
             <LinkContainer to={"/Personalinformationcorporate"} ><button className='buttondashboardcss'>Complete</button></LinkContainer>
            </div>

            <div style={{ width: '22rem',height:'15em' }} className='containercssdashboard1'>
             <p className='hedingcssdashboard'>Credit Document Information</p>
             <div className='texticoncsss'>
             <TextSnippetIcon style={{fontSize:60}} className='texticoncss'/>
             </div>
             <LinkContainer to={"/Creditdocumentinformationcorporate"} ><button className='buttondashboardcss'>Complete</button></LinkContainer>
            </div>

            
            </Row>
            <Row style={{marginLeft:'5vh',marginTop:'5vh'}}>

            <div style={{ width: '22rem',height:'15em' }} className='containercssdashboard1'>
             <p className='hedingcssdashboard'>Medical Declaration Information</p>
             <div className='medicaliconcsss'>
             <MedicalServicesIcon style={{fontSize:60}} className='texticoncss'/>
             </div>
             <LinkContainer to={"/Medicaldeclationcorporate"} ><button className='buttondashboardcss'>Complete</button></LinkContainer>
            </div>
            <div style={{ width: '22rem',height:'15em' }} className='containercssdashboard3'>
             <p className='hedingcssdashboard'>Policy Document</p>
             <div className='nodeaddiconcsss'>
             <NoteAddIcon style={{fontSize:60}} className='noteaddiconcss1'/>
             </div>
             <LinkContainer to={"/Policydocumentcorporate"} ><button className='buttondashboardcss'>Complete</button></LinkContainer>
            </div>
            </Row>

          
         
            
        </Col>
      </Row>
    </>
  )
}

export default Addcorporate