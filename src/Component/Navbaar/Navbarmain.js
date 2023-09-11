import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import img from '../Images/logo.jpg.png'
import { Image } from 'react-bootstrap';
import DescriptionIcon from '@mui/icons-material/Description';
import '../Allcss/Navbaarcss.css'

const Navbarmain = () => {
  return (
    <>
    <div className='sidebar'>
      
      <ul>
      <Navbar  expand="down" className="navbaarcss1">
       
        <Container>

        <Image src={img}  className='imgcss' />
          <Navbar.Toggle  />
          
          <Navbar.Collapse >
            <Nav className="me-auto">
              <NavDropdown icon={DescriptionIcon} title={<DescriptionIcon text="Dashboard"/>}  className='baarcss'>
                <LinkContainer to={"/Dashboardata"} ><NavDropdown.Item > Dashboard</NavDropdown.Item></LinkContainer>
                
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="New Admission" className='baarcss'>
                <LinkContainer to={"/NewAdmission"} ><NavDropdown.Item >New Admission</NavDropdown.Item></LinkContainer>
               
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Individual" className='baarcss'>
                <LinkContainer to={"/Individual"} ><NavDropdown.Item >Individual</NavDropdown.Item></LinkContainer>
               
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Coporate" className='baarcss'>
              
                <LinkContainer to={"/Coporate"} ><NavDropdown.Item >Coporate</NavDropdown.Item></LinkContainer>
                
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Application Status" className='baarcss'>
                <LinkContainer to={"/ApplicationStatus"} ><NavDropdown.Item >Application Status</NavDropdown.Item></LinkContainer>
               
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Roles" className='baarcss'>
                <LinkContainer to={"/Roles"} ><NavDropdown.Item >Roles</NavDropdown.Item></LinkContainer>
              
                <NavDropdown.Divider />
              </NavDropdown>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </ul>
      </div>
    </>
  )
}

export default Navbarmain