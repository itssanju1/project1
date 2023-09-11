import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NewAdmission from '../Allfiels/NewAdmission'

const Dashnav = () => {

    const handle=()=>{
        return(
            <>
            <h1>hello</h1>
            </>
        )
    }
  return (
    <>
    <Container>
    <Row>
        <Col md={6} >
         <h1>Welcome, Chetan Goyal</h1>
         <p>Have a great day and nice day</p>
    

        </Col>
        <Col md={6}>  
        <button onClick={handle}>click</button>
   
        </Col>
    </Row>
  </Container>
    </>
  )
}

export default Dashnav