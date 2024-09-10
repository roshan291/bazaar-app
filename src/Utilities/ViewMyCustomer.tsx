import React, { useEffect, useId, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ViewMyCustomer = (props: any) => {
    console.log("props", props?.data)

    const {customerFirstName, customerLastName, customerMobile, customerEmail, city, state, country, zipcode} = props?.data;
  return (
    <Modal
      {...props}
      size="l"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <h5>View Customer</h5>
        </Modal.Title>
      </Modal.Header>
      
        <Modal.Body className='view_my_customer_wrapper'>
            <Row>
                <Col><span>Name :</span> {customerFirstName} {customerLastName}</Col>
                <Col><span>Mobile :</span> {customerMobile} </Col>
               
            </Row>
            <Row>
                <Col><span>Email :</span> {customerEmail} </Col>
                <Col><span>City :</span> {city} </Col>
            </Row>
            <Row>
                <Col><span>State :</span> {state} </Col>
                <Col><span>Country : </span> {country} </Col>
            </Row>
            <Row>
                <Col><span>Zipcode :</span> {zipcode}</Col>
            </Row>
        </Modal.Body>
     
    </Modal>
  )
}

export default ViewMyCustomer