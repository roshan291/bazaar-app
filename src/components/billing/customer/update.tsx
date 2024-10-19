import React, { useEffect, useId, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
// import CustomTextInput from './CustomTextInput';

import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
// import CustomEmailInput from './CustomEmailInput';
// import CustomDropdown from './CustomDropdown';
// import { selectCountries } from '../constants/countries';
// import CustomNumberInput from './CustomNumberInput';
// import { generateCurrentDateAndTime, generateUniqueId, onKeyPress } from './Utils'
import Spinner from 'react-bootstrap/Spinner';
import { generateCurrentDateAndTime, generateUniqueId, onKeyPress } from '../../../Utilities/Utils';
// import CustomToast from '../../../Utilities/CustomToast';
import CustomTextInput from '../../../Utilities/CustomTextInput';
import CustomNumberInput from '../../../Utilities/CustomNumberInput';
import CustomDropdown from '../../../Utilities/CustomDropdown';
import CustomEmailInput from '../../../Utilities/CustomEmailInput';
import Button from '../../buttons';
import { selectCountries } from '../../../constants/countries';
import styles from "./customer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { navigationURL } from '../../../constants';
import { useParams } from 'react-router-dom';
import { _get, _put } from '../../../API/useApi';
// import CustomToast from './CustomToast';  
// import Button from '../components/buttons';

const UpdateCustomer = (props: any) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = React.useState(false)
  const [validated, setValidated] = React.useState(false);
  const [statusCode, setStatusCode] = useState("" as any) 
  const [showToast, setshowToast] = useState(false) 
  const navigate = useNavigate(); 
  const { id } = useParams();

  const {
    createLead,
    manageLead,
    dashboard,
    customisedItinerary,
    groupItinerary,
    readyItinerary,
    proformainvoice,
    invoice,
    customerView,
} = navigationURL;

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

  const handleCreateNewCustomer = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
     
      event.stopPropagation();
    } else {
    //  props?.closeModal(false);
      putCustomerData(id, createNewCustomer);
      handleBackToCustomer();
    }
    setValidated(true)
  }

  const putCustomerData = async(id: any, createNewCustomer: any) => {
    await _put(`/createcustomer/${id}`, createNewCustomer); 
  }

  const getCustomerData = async() => {
    const response = await _get(`/createcustomer/${id}`);
    setCreateNewCustomer(response?.data);
  }

  useEffect(() => {
    getCustomerData();
  },[])

 
  useEffect(() => {
    return () => {
      setshowToast(false)
    }
   }, [])

   const handleBackToCustomer = () => {
      navigate(customerView);
   }

  return (
    <>
    {/* <CustomToast showToast = {showToast} variantType = {statusCode}/> */}
     <div className={styles.update_customer}>
        <div className={styles.update_customer_header}>
        <h5>Update Customer</h5>   
        {/* <Button variant="default">Back <FontAwesomeIcon icon={faArrowRight}  /></Button> */}
        </div>   
        <br />
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
            <Form.Group as={Col} md="12">
              <br />
              <br />
              <Button variant="secondary" className='align-items-center d-flex' onClick={handleBackToCustomer}>
                Cancel
                </Button>
              <Button variant="primary" className='align-items-center d-flex' onClick={handleCreateNewCustomer}>
                Update
                </Button>
              <br />
            </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default UpdateCustomer