import React, { useEffect, useId, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomTextInput from './CustomTextInput';

import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import CustomEmailInput from './CustomEmailInput';
import CustomDropdown from './CustomDropdown';
import { selectCountries } from '../constants/countries';
import CustomNumberInput from './CustomNumberInput';
import { generateCurrentDateAndTime, generateUniqueId, onKeyPress } from './Utils';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import CustomToast from './CustomToast';  
import apiRequest from '../API/apiClient';
import { _post } from '../API/useApi';

const CreateNewCustomer = (props: any) => {

  const [loading, setLoading] = React.useState(false)
  const [validated, setValidated] = React.useState(false);
  const [statusCode, setStatusCode] = useState("" as any) 
  const [showToast, setshowToast] = useState(false) 
  

  const [createNewCustomer, setCreateNewCustomer ] = React.useState({
    id: `HB${generateUniqueId()}`,
    createdDate: generateCurrentDateAndTime(),
    customerFirstName: "",
    customerLastName: "",
    customerEmail: "",
    customerMobile: "",
    country: "",
    state: "",
    city: "",
    zipcode: ""
  } as any)

 

  const {
    customerFirstName,
    customerLastName,
    customerEmail,
    customerMobile,
    country,
    state,
    city,
    zipcode
  } = createNewCustomer;

  const handleOnChangeCreateNewCustomer = (e: any) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;
     
      setCreateNewCustomer({
        ...createNewCustomer,
        [name]: value
      });
  }

  const isButtonDisabled = Object.values(createNewCustomer).some(value => value === '');

  const handleCreateNewCustomer = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) { 
      event.stopPropagation();
    } else { 
     await _post('/createcustomer', createNewCustomer);
     props?.closeModal(false)
    }

  }
 
  useEffect(() => {
  
    return () => {
      setshowToast(false)
    }
   }, [])

  return (
    <>
    <CustomToast showToast = {showToast} variantType = {statusCode}/>
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <h5>Create New Customer</h5>
        </Modal.Title>
      </Modal.Header>
      
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreateNewCustomer}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom">
              <Form.Label>Customer First Name</Form.Label>
              <CustomTextInput required = {true} value = {customerFirstName} onChange = {handleOnChangeCreateNewCustomer} name = "customerFirstName" />
            </Form.Group>
            
            <Form.Group as={Col} md="4" controlId="validationCustom">
              <Form.Label>Customer Last Name</Form.Label>
              <CustomTextInput required = {true} value = {customerLastName} onChange = {handleOnChangeCreateNewCustomer} name = "customerLastName" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom">
              <Form.Label>Customer Email</Form.Label>
              <CustomEmailInput required = {true} value = {customerEmail} onChange = {handleOnChangeCreateNewCustomer} name = "customerEmail" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom">
              <br />
              <Form.Label>Customer Mobile</Form.Label>
              <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {customerMobile} onChange = {handleOnChangeCreateNewCustomer} name = "customerMobile" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom">
              <br />
              <Form.Label>Country</Form.Label>
              <CustomDropdown placeholder = "Select Country" required = {true} value = {country} onChange = {handleOnChangeCreateNewCustomer} name = "country" dropdownData = {selectCountries} />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom">
              <br />
              <Form.Label>State</Form.Label>
              <CustomTextInput required = {true} value = {state} onChange = {handleOnChangeCreateNewCustomer} name = "state" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom">
              <br />
              <Form.Label>City</Form.Label>
              <CustomTextInput required = {true} value = {city} onChange = {handleOnChangeCreateNewCustomer} name = "city" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom">
              <br />
              <Form.Label>Zip code</Form.Label>
              <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {zipcode} onChange = {handleOnChangeCreateNewCustomer} name = "zipcode" />
            </Form.Group>
           
          </Row>
          <Row>
            <Form.Group as={Col} md="4">
              <br />
              <Button disabled={isButtonDisabled} className='align-items-center d-flex' onClick={handleCreateNewCustomer}>
                Submit
                </Button>
              <br />
            </Form.Group>
          </Row>
          </Form>
        </Modal.Body>
     
    </Modal>
    </>
  )
}

export default CreateNewCustomer