import React, {useState} from 'react'
import styles from "./create_itinerary.module.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { itineraryDefaultConstant } from '../constants';
import CustomTextInput from '../../../Utilities/CustomTextInput';
import CustomDropdown from '../../../Utilities/CustomDropdown';
import { selectCouple, selectCurrency, selectThankyouNote, selectTypeOfHoliday, selectWelcomeNote } from '../../../constants';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CustomDatePicker from '../../../Utilities/CustomDatePicker';
import CustomNumberInput from '../../../Utilities/CustomNumberInput';
import { onKeyPress } from '../../../Utilities/Utils';
import CustomEmailInput from '../../../Utilities/CustomEmailInput';
import CustomeTextarea from '../../../Utilities/CustomeTextarea';
import { selectCountries } from '../../../constants/countries';

const CreateItinerary = () => {
    const [validated, setValidated] = useState(false);

    const [createItinerary, setCreateItinerary] = useState({
        itineraryTitle: "",
        destination: "",
        typeOfHoliday: "",
        noOfAdults: "",
        noOfKids: "",
        startDate :"",
        endDate :"",
        coupleList: "",
        currencyType: "",
        budgetForTrip: "",
        serviceList: [
            {id: 1, isChecked: false, serviceName: "Airfare"},
            {id: 2, isChecked: false, serviceName: "Internal Transportation"},
            {id: 3, isChecked: false, serviceName: "Hotel Stay"},
            {id: 4, isChecked: false, serviceName: "Sightseeing"},
            {id: 5, isChecked: false, serviceName: "Visa Fees"},
            {id: 6, isChecked: false, serviceName: "Government Tax"},
            {id: 7, isChecked: false, serviceName: "Surcharge"},
            {id: 8, isChecked: false, serviceName: "Cruise Stay"},
            {id: 9, isChecked: false, serviceName: "Free Goodies"},
            {id: 10, isChecked: false, serviceName: "APAI - Stay & All Meals"},
            {id: 11, isChecked: false, serviceName: "Passport Fees"},
            {id: 12, isChecked: false, serviceName: "CP - Stay & Breakfast"},
            {id: 13, isChecked: false, serviceName: "Tour Manager"},
            {id: 14, isChecked: false, serviceName: "MAP - Stay, Breakfast & Dinner"},
        ],
        noOfNights: "",
        travellers: "",
        welcomenote: "",
        customerName: "",
        emailId: "",
        mobileNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postalCode: "", 
        birthDate: "",
        anniversaryDate: "",
        note: "",
        inclusion: "",
        exclusion: "",
        cost: "",
        termsConditions: "",
        tips: "",
        otherVisaInformation: "",
        thankyounote: ""
    })

    const {
        itineraryTitle,
        destination,
        typeOfHoliday,
        noOfAdults,
        noOfKids,
        startDate,
        endDate,
        coupleList,
        currencyType,
        budgetForTrip,
        noOfNights,
        travellers,
        serviceList,
        welcomenote,
        customerName,
        emailId,
        mobileNumber,
        address,
        country,
        state,
        city,
        postalCode, 
        birthDate,
        anniversaryDate,
        note,
        inclusion,
        exclusion,
        cost,
        termsConditions,
        tips,
        otherVisaInformation,
        thankyounote,
    } = createItinerary;
    

 
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
        //   axios.post(`http://localhost:8001/createLead`, createLead).then((response: any) => {
         
        // })
          
          // handleClose();
          // history("/lead-board/supervise")
        }
        setValidated(true);
      };


      
  const handleChangeItinerary = (e: any) => {
    const target = e.target;
    
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCreateItinerary({
      ...createItinerary,
      [name]: value
    });
  }

  const handleChangeLeadCheckBox = (id:any) => {
    setCreateItinerary((prevCreateLead: any) => {
      const updatedServiceList = prevCreateLead.serviceList.map((service:any) =>
        service.id === id
          ? { ...service, isChecked: !service.isChecked }
          : service
      );

      return {
        ...prevCreateLead,
        serviceList: updatedServiceList,
      };
    });
  };

   
    {/* <CustomDatePicker required = {false} value = {startDate} onChange = {handleChangeItinerary} name = "startDate" minDate = {new Date().toISOString().split("T")[0]} />

    <CustomDropdown required = {false} value = {getRequirement} onChange = {handleChangeItinerary} name = "getRequirement" dropdownData = {selectRequirement} />

    <CustomTextInput required = {false} value = {leadTitle} onChange = {handleChangeItinerary} name = "leadTitle" />

    <CustomeTextarea value = {shortNote} onChange = {handleChangeItinerary} name = "shortNote" /> */}
      

  return (
    <Container fluid className={styles.create_itinerary_page}>
       <Container>
        <Row>
            <Col>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Tabs
                defaultActiveKey="Summary"
                id="fill-tab"
                className="mb-0"
                fill
                >
                {
                    itineraryDefaultConstant?.menuItems?.map((nav: any) => 
                    <Tab eventKey={nav} title={nav}>
                        {
                            nav === "Summary" ? <>
                            <Row>                       
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Itinerary Title<span className='required'>*</span></Form.Label>
                                    <Col sm="6">
                                        <CustomTextInput required = {false} value = {itineraryTitle} onChange = {handleChangeItinerary} name = "itineraryTitle" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Destination</Form.Label>
                                    <Col sm="6">
                                        <CustomTextInput required = {false} value = {destination} onChange = {handleChangeItinerary} name = "destination" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Type of Holidays<span className='required'>*</span></Form.Label>
                                    <Col sm="6">
                                    <CustomDropdown required = {true} value = {typeOfHoliday} onChange = {handleChangeItinerary} name = "typeOfHoliday" dropdownData = {selectTypeOfHoliday} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Adults</Form.Label>
                                    <Col sm="6">
                                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfAdults} onChange = {handleChangeItinerary} name = "noOfAdults" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Child</Form.Label>
                                    <Col sm="6">
                                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfKids} onChange = {handleChangeItinerary} name = "noOfKids" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Start Date</Form.Label>
                                    <Col sm="6">
                                        <CustomDatePicker required = {false} value = {startDate} onChange = {handleChangeItinerary} name = "startDate" minDate = {new Date().toISOString().split("T")[0]} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>End Date</Form.Label>
                                    <Col sm="6">
                                        <CustomDatePicker required = {false} value = {endDate} onChange = {handleChangeItinerary} name = "endDate" minDate = {new Date().toISOString().split("T")[0]} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Nights</Form.Label>
                                    <Col sm="6">
                                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {noOfNights} onChange = {handleChangeItinerary} name = "noOfNights" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Travellers</Form.Label>
                                    <Col sm="6">
                                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {travellers} onChange = {handleChangeItinerary} name = "travellers" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Budget/Cost</Form.Label>
                                    <Col sm="6">
                                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {budgetForTrip} onChange = {handleChangeItinerary} name = "budgetForTrip" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Cost For</Form.Label>
                                    <Col sm="6">
                                        <CustomDropdown required = {true} value = {coupleList} onChange = {handleChangeItinerary} name = "coupleList" dropdownData = {selectCouple} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Currency</Form.Label>
                                    <Col sm="6">
                                        <CustomDropdown placeholder = "Choose currency" required = {true} value = {currencyType} onChange = {handleChangeItinerary} name = "currencyType" dropdownData = {selectCurrency} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Tour Cost Cover</Form.Label>
                                    <Col sm="6">
                                    <Row className="mb-12">
                                        {
                                        serviceList?.map((service: any) => <Form.Group as={Col} md="6" key={service?.serviceName} className='checkbox_customeStyle'>
                                            <label key={service.id}>
                                            <input
                                                type="checkbox"
                                                checked={service.isChecked}
                                                onChange={() => handleChangeLeadCheckBox(service.id)}
                                            />
                                            {service.serviceName}
                                            </label>
                                        </Form.Group>)
                                        }
                                        <div>
                                        {/* <Button variant="link" onClick={handleAddMoreServices}>Add more</Button> */}
                                        </div>
                                    </Row>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Welcome Note</Form.Label>
                                    <Col sm="6"> 
                                        <CustomDropdown placeholder = "select welcome note" required = {true} value = {welcomenote} onChange = {handleChangeItinerary} name = "welcomenote" dropdownData = {selectWelcomeNote} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'></Form.Label>
                                    <Col sm="6" className="mt-3">
                                        <Button variant="primary">Save & Continue</Button>
                                    </Col>
                                </Form.Group>
                            </Row>
                            </> : <></>
                        }
                        {
                            nav === "Customer Information" ? <>
                                <Row>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Customer name </Form.Label>
                                        <Col sm="6">
                                            <CustomTextInput required = {true} value = {customerName} onChange = {handleChangeItinerary} name = "customerName" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Email Id </Form.Label>
                                        <Col sm="6">
                                            <CustomEmailInput required = {false} value = {emailId} onChange = {handleChangeItinerary} name = "emailId" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Mobile Number</Form.Label>
                                        <Col sm="6">
                                            <CustomNumberInput required = {false} value = {mobileNumber} onChange = {handleChangeItinerary} name = "mobileNumber" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Address</Form.Label>
                                        <Col sm="6">
                                            <CustomeTextarea required = {false} value = {address} onChange = {handleChangeItinerary} name = "address" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Country</Form.Label>
                                        <Col sm="6">
                                        <CustomDropdown placeholder = "select country" required = {true} value = {country} onChange = {handleChangeItinerary} name = "country" dropdownData = {selectCountries} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>State</Form.Label>
                                        <Col sm="6">
                                            <CustomTextInput required = {false} value = {state} onChange = {handleChangeItinerary} name = "state" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>City</Form.Label>
                                        <Col sm="6">
                                            <CustomTextInput required = {false} value = {city} onChange = {handleChangeItinerary} name = "city" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Pincode</Form.Label>
                                        <Col sm="6">
                                            <CustomNumberInput required = {false} value = {postalCode} onChange = {handleChangeItinerary} name = "postalCode" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Birth Date</Form.Label>
                                        <Col sm="6">
                                            <CustomDatePicker required = {false} value = {birthDate} onChange = {handleChangeItinerary} name = "birthDate" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Anniversary Date</Form.Label>
                                        <Col sm="6">
                                            <CustomDatePicker required = {false} value = {anniversaryDate} onChange = {handleChangeItinerary} name = "anniversaryDate" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Note</Form.Label>
                                        <Col sm="6">
                                            <CustomeTextarea required = {false} value = {note} onChange = {handleChangeItinerary} name = "note" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'></Form.Label>
                                        <Col sm="6" className="mt-3">
                                            <Button variant="primary">Save & Continue</Button>
                                        </Col>
                                    </Form.Group>
                                </Row>
                            </> : <></>
                        }
                        {
                            nav === "Day Wise Plan" ? <><h1>Day Wise Plan</h1></> : <></>
                        }
                        {
                            nav === "Inclusion / Exclusion" ? <>
                            <Row>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Inclusion</Form.Label>
                                    <Col sm="8">
                                        <CustomeTextarea required = {false} value = {inclusion} onChange = {handleChangeItinerary} name = "inclusion" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Exclusion</Form.Label>
                                    <Col sm="8">
                                        <CustomeTextarea required = {false} value = {exclusion} onChange = {handleChangeItinerary} name = "exclusion" />
                                    </Col>
                                </Form.Group>
                            </Row>
                            </> : <></>
                        }
                        {
                            nav === "Cost" ? <>
                            <Row>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Cost</Form.Label>
                                    <Col sm="8">
                                        <CustomeTextarea required = {false} value = {cost} onChange = {handleChangeItinerary} name = "cost" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Term & Condition</Form.Label>
                                    <Col sm="8">
                                        <CustomeTextarea required = {false} value = {termsConditions} onChange = {handleChangeItinerary} name = "termsConditions" />
                                    </Col>
                                </Form.Group>
                            </Row>
                            </> : <></>
                        }
                        {
                            nav === "Tips" ? <>
                            <Row>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Tips</Form.Label>
                                    <Col sm="8">
                                        <CustomeTextarea required = {false} value = {tips} onChange = {handleChangeItinerary} name = "tips" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-start justify-content-end'>Other / Visa Infromaton</Form.Label>
                                    <Col sm="8">
                                        <CustomeTextarea required = {false} value = {otherVisaInformation} onChange = {handleChangeItinerary} name = "otherVisaInformation" />
                                    </Col>
                                </Form.Group>
                            </Row>
                            </> : <></>
                        }
                        {
                            nav === "Thank you" ? <>
                                <Form.Group as={Row} className="mb-3" controlId="Itinerary Title">
                                    <Form.Label column sm="2" className='d-flex align-items-end justify-content-end'>Thankyou Note</Form.Label>
                                    <Col sm="6"> 
                                        <CustomDropdown placeholder = "select thankyou note" required = {true} value = {thankyounote} onChange = {handleChangeItinerary} name = "thankyounote" dropdownData = {selectThankyouNote} />
                                    </Col>
                                </Form.Group>
                            </> : <></>
                        }
                    </Tab>)
                }
            </Tabs>
            </Form>
            </Col>
        </Row>
       </Container>
    </Container>
  )
}

export default CreateItinerary