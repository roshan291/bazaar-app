import React, { useEffect, useState, useId } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import CustomTextInput from '../../Utilities/CustomTextInput';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import Row from 'react-bootstrap/esm/Row';
import { selectMeal } from '../../constants';
import Col from 'react-bootstrap/esm/Col';
import CustomDropdown from '../../Utilities/CustomDropdown';
import CustomDatePicker from '../../Utilities/CustomDatePicker';
import CustomNumberInput from '../../Utilities/CustomNumberInput';
import { onKeyPress } from '../../Utilities/Utils';
import { dropdownPlaceholder } from './../../constants/index';
import { selectStatesInIndia } from '../../constants/states';
import { selectCountries } from '../../constants/countries';
import { stateCitiesMap } from '../../constants/cities';
import AddOwnHotel from './addOwnHotel';

const Hotel = (props: any) => {

  const uniqueId = useId(); 
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  useEffect(() => {
    setShow(props?.show)
  }, [props])

  const [hotel, setHotel] = useState({
    id: uniqueId,
    checkInDate: "",
    checkInTime:"",
    numberOfNights:"",
    adults:"",
    rooms:"",
    childs:"",
    extrabed:"",
    roomTypes:"",
    noteText:""
})

const [searchHotel, setSearchHotel] = useState({
  country: "",
  state: "",
  city: "",
  searchByName: "",
})

const [selectedCitiesFromState, setSelectedCitiesFromState] = useState([] as any)
const [selectedState, setSelectedState] = useState('');
const [openAddHotel, setOpenAddHotel] = React.useState(false);


const {
  country,
  state,
  city,
  searchByName,
} = searchHotel

const {
  checkInDate,
  checkInTime,
  numberOfNights,
  rooms,
  childs,
  extrabed,
  roomTypes,
  noteText,
  adults
} = hotel

  const handleChangeHotel = (e: any) => {
    const target = e.target;
    const name = target.name; 

    setHotel({
      ...hotel,
      [name]: target.value
    });
  }

  const handleChangeSearchHotel = (e:any) => {
    
    const target = e.target;
    const name = target.name; 
  
    setSearchHotel({
      ...searchHotel,
      [name]: target.value
    });

    if(name === "state") { 
      setSelectedCitiesFromState(stateCitiesMap[target.value]);
    }
  }

  const handleHotelSearch = (e: any) => {
    e.preventDefault();
    console.log("searchHotel", searchHotel)
  }

  const onSubmitHotel = (event: any) => {
    event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        console.log("All date Not Verified handleCreateNewCustomer");
        event.stopPropagation();
      } else {
        props?.getDayHotel([hotel])
      }
  }

  return (
    <>
   
     <Modal
        show={show}
        onHide={props?.onHide}
        backdrop="static"
        dialogClassName="modal-90w"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h5>Search Hotel</h5></Modal.Title>
        </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleHotelSearch}>
              <Row className="mb-12 align-items-end" >
                    <Form.Group as={Col} md="2" controlId="validationCustom">
                      <Form.Label>Country</Form.Label>
                      <CustomDropdown required = {true} value = {country} onChange = {handleChangeSearchHotel} name = "country" dropdownData = {selectCountries} />           
                    </Form.Group>          
                    { country === "India" ? 
                      <>
                      <Form.Group as={Col} md="2" controlId="validationCustom">
                        <Form.Label>State</Form.Label>
                        <CustomDropdown required = {false} value = {state} onChange = {handleChangeSearchHotel} name = "state" dropdownData = {selectStatesInIndia} />
                      </Form.Group>   
                      <Form.Group as={Col} md="2" controlId="validationCustom">
                        <Form.Label>City</Form.Label>
                        <CustomDropdown required = {false} value = {city} onChange = {handleChangeSearchHotel} name = "city" dropdownData = {selectedCitiesFromState} />
                      </Form.Group> 
                      </> : <>
                        <Form.Group as={Col} md="2" controlId="validationCustom">
                          <Form.Label>State</Form.Label>
                          <CustomTextInput required = {true} value = {state} onChange = {handleChangeSearchHotel} name = "state" />
                        </Form.Group>   
                        <Form.Group as={Col} md="2" controlId="validationCustom">
                          <Form.Label>City</Form.Label>
                          <CustomTextInput required = {true} value = {city} onChange = {handleChangeSearchHotel} name = "city" />
                        </Form.Group> 
                      </>
                    }
                    <Form.Group as={Col} md="3" controlId="validationCustom">
                      <Form.Label>Search By Name</Form.Label>
                      <CustomTextInput required = {true} value = {searchByName} onChange = {handleChangeSearchHotel} name = "searchByName" /> 
                    </Form.Group>   
                    <Form.Group as={Col} md="1"  controlId="validationCustom">
                      <Button variant="primary" type='submit'>Search</Button>
                    </Form.Group>   
                </Row>
              </Form>
          </Modal.Body>
          <div className="line_devider_inside"></div>
         <AddOwnHotel show = {openAddHotel} onHide = {() => setOpenAddHotel(false)} />
        <Form noValidate validated={validated} onSubmit={onSubmitHotel}>
            <Modal.Body>
              <Row className="mb-6">
              <Col sm={6}>
                <Row>
                <Form.Group as={Col} md="6" controlId="validationCustom">
                  <Form.Label>CheckIn Date <span className='required'>*</span></Form.Label>
                  <CustomDatePicker required = {true} value = {checkInDate} onChange = {handleChangeHotel} name = "checkInDate" minDate = {new Date().toISOString().split("T")[0]} />       
                </Form.Group>          
                <Form.Group as={Col} md="6" controlId="validationCustom">
                  <Form.Label>CheckIn Time</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {checkInTime} onChange = {handleChangeHotel} name = "checkInTime" placeholder="Eg. 01:00 PM" />
                </Form.Group>   
                <Form.Group as={Col} md="6" className='mt-2' controlId="validationCustom">
                  <Form.Label >No of Nights</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {numberOfNights} onChange = {handleChangeHotel} name = "numberOfNights" placeholder="Eg. 1" />
                </Form.Group> 
                <Form.Group as={Col} md="6" className='mt-2' controlId="validationCustom">
                  <Form.Label>Adults</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {adults} onChange = {handleChangeHotel} name = "adults" placeholder="Eg. 1" />
                </Form.Group>   
                <Form.Group as={Col} md="6" className='mt-2' controlId="validationCustom">
                  <Form.Label>No of Rooms</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {rooms} onChange = {handleChangeHotel} name = "rooms" placeholder="Eg. 1" />
                </Form.Group> 
                <Form.Group as={Col} md="6" className='mt-2' controlId="validationCustom">
                  <Form.Label>Child</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {childs} onChange = {handleChangeHotel} name = "childs" placeholder="Eg. 1" />
                </Form.Group> 
                <Form.Group as={Col} md="6" className='mt-2' controlId="validationCustom">
                  <Form.Label>Extra Bed</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {extrabed} onChange = {handleChangeHotel} name = "extrabed" placeholder="Eg. 1" />
                </Form.Group> 
                <Form.Group as={Col} md="6" className='mt-2' controlId="validationCustom">
                  <Form.Label>Define Rooms</Form.Label>
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {roomTypes} onChange = {handleChangeHotel} name = "roomTypes" placeholder="Eg. 1 Deluxe & 1 Executive Room" />
                </Form.Group>
                <Form.Group as={Col} md="12" className='mt-2' controlId="validationCustom">
                  <Form.Label>Note:</Form.Label>
                  <CustomeTextarea value = {noteText} onChange = {handleChangeHotel} name = "noteText" />
                </Form.Group>
                </Row>
              </Col>
              <Col sm={6}>
                <div className="mb-6 d-flex justify-content-end">
                  <Button variant="danger" style={{marginRight:'10px'}}>Select Option Hotel</Button>{' '}
                  <Button variant="info" onClick={() => setOpenAddHotel(true)}>Add Own Hotel</Button>{' '}
                </div>
              </Col>
            </Row>
            </Modal.Body>
          <Modal.Footer>
          <br />
          <Button variant="secondary" onClick={props?.onHide}>
              Close
          </Button>
          <Button variant="primary" type='submit'>Submit</Button>
          </Modal.Footer>
        </Form>
        
      </Modal>
    </>
  )
}

export default Hotel