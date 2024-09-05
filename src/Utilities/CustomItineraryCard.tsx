import React from 'react'
import { Row, Container, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SampleImage from "../assets/icons/13366732_ML.jpg"

const CustomItineraryCard = () => {
  return (
    <>
        <Container className='position-relative p-0'>
             
                <Card style={{overflow: "hidden"}}>
                    <Card.Body className='pt-0 pb-0 ps-0'>
                        <Card.Text>
                        <Row className='align-items-center justify-content-between'>
                            <Col xs lg="4">
                                <img src = {SampleImage} alt = "card image" />
                            </Col>
                            <Col>
                                <h6>HBITR13 - Goa Package</h6>
                                <hr className='mt-2 mb-2'/>
                                <Card.Title><h6>Customer Name</h6></Card.Title>
                                <ul className='p-0 m-0 d-flex align-items-center justify-content-between'>
                                    <li><span className='d-block custom_label_color'>Plan Details</span>2 Days 1 Night</li>
                                    <li><span className='d-block custom_label_color'>Adults</span>3</li>
                                    <li><span className='d-block custom_label_color'>Kinds(2 to 12 years)</span>2</li> 
                                </ul>
                            </Col>
                            <h6 className='itinerary_carousel_action'><Button variant="light">Create duplicate</Button></h6>
                        </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        
    </>
  )
}

export default CustomItineraryCard

