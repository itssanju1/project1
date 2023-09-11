import React from 'react'
import '../Allcss/Navbaarcss.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DescriptionIcon from '@mui/icons-material/Description';
import { Image } from 'react-bootstrap';
import img from '../Images/logo.jpg.png'
import { LinkContainer } from 'react-router-bootstrap';
const Eex = () => {
  return (
   <>
   <>
   
   <div className='sidebar'>
   <Image src={img}  className='imgcss' />
      <ul>
     

      {/* <Navbar expand="down" className="navbaarcss1">
      <Container>
      <Image src={img}  className='imgcss' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> */}
          
          <div className='navbarcssss'>
           <LinkContainer to={'/Dashboard'}><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Dashboard</Nav.Link></LinkContainer> 
           </div>
           <div>
           <div className='navbarcsss'>

           <LinkContainer to={"/NewAdmission"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> New Admission</Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/Individual"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Individual</Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/Coporate"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Coporate</Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/ApplicationStatus"} className='dashboardcss'><Nav.Link ><DescriptionIcon className='cssss'/> Application Status</Nav.Link></LinkContainer>
           </div>
           <div className='navbarcsss'>
           <LinkContainer to={"/Roles"} ><Nav.Link className='dashboardcss'><DescriptionIcon className='cssss'/> Roles</Nav.Link></LinkContainer>
           </div>       </div>
{/*             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        
          
      </ul>
      </div>
   
   </>
   </>
  )
}

export default Eex