import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsIcon from '@mui/icons-material/Notifications';
import pic from '../../../Images/1.png'
import "../../../Allcss/Medicaldec.css"
import { LinkContainer } from 'react-router-bootstrap';

const MedicalDedarationInformation = () => {
  return (
    <>
    <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <div className='divcss0'>
                        Dashboard <ArrowForwardIosIcon className='arrowcss' />  Add Corporate <ArrowForwardIosIcon className='arrowcss' /> Medical declaration
                        <NotificationsIcon style={{ fontSize: 40 }} className='notification' />
                        <img src={pic} className='piccss'></img>
                    </div>
                    <div className='divcss1'>
                        Medical declaration
                    </div>
                    <div className='divcss2'>
                        <Row>
                            <Col md={4}>

                                <p>Does the patient drink alcohol?*</p>
                                <input type="radio"  name="drink" />
                                <label >Yes</label>
                                <input type="radio"  name="drink" className='radiocss0' />
                                <label >No</label>



                            </Col>
                            <Col md={8}>

                                <p>Does the patient have hypertension?*</p>
                                <input type="radio"  name="hypertension" />
                                <label >Yes</label>
                                <input type="radio"  name="hypertension" className='radiocss0' />
                                <label >No</label>



                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>

                                <p>How many times a weak?*</p>
                                <select name="cars" id="weak" className='selectcss'>
                                    <option value="volvo">1 Weak</option>
                                    <option value="saab">2 Weak</option>
                                    <option value="opel">3 Weak</option>
                                    <option value="audi">4 Weak</option>
                                </select>

                            </Col>
                            <Col md={8}>

                                <p>Does You Have any pre-existing disease?*</p>
                                <input type="radio"  name="disease" />
                                <label >Yes</label>
                                <input type="radio"  name="disease" className='radiocss0' />
                                <label >No</label>



                            </Col>
                        </Row>
                        <Row>

                            <Col md={4}>

                                <p>Does the patient Smoke?*</p>
                                <input type="radio"  name="Smoke" />
                                <label >Yes</label>
                                <input type="radio"  name="Smoke" className='radiocss0' />
                                <label >No</label>

                            </Col>
                            <Col md={8}>
                                <p>Have you declared these details with the insurer at the time of purchasing the policy?*</p>
                                <input type="radio"  name="policy" />
                                <label >Yes</label>
                                <input type="radio"  name="policy" className='radiocss0' />
                                <label >No</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>

                                <p>How many a Day?*</p>
                                <select name="cars" id="weak" className='selectcss'>
                                    <option value="volvo">1 Day</option>
                                    <option value="saab">2 Day</option>
                                    <option value="opel">3 Day</option>
                                    <option value="audi">4 Day</option>
                                </select>

                            </Col>
                            <Col md={8}>
                                <div className="large-checkbox" >
                                    <input type="checkbox" className='conditionscss' name="conditions" />
                                    <label for="vehicle1"> Do you agree to terms and conditions?</label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                            <p>Does the patient have diabetes?*</p>
                                <input type="radio"  name="diabetes" />
                                <label >Yes</label>
                                <input type="radio"  name="diabetes" className='radiocss0' />
                                <label >No</label>
                            </Col>
                        </Row>


                    </div>
                    <LinkContainer to={'/Addcorporate'}><Button className='medicalbuttoncorporate'>Save and Next</Button></LinkContainer>
                    
                    

                </Col>
            </Row>
    
    </>
  )
}

export default MedicalDedarationInformation