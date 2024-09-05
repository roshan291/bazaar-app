import React from 'react'
import { useState, useEffect, useId } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import CustomTextInput from '../../Utilities/CustomTextInput';
import CustomDropdown from '../../Utilities/CustomDropdown';
import { selectHotelPreferences } from '../../constants';
import CustomNumberInput from '../../Utilities/CustomNumberInput';
import { onKeyPress } from '../../Utilities/Utils';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import Description from './description';
import { selectCountries } from '../../constants/countries';
import { selectStatesInIndia } from '../../constants/states';
import { stateCitiesMap } from '../../constants/cities';

const AddOwnHotel = (props: any) => {
    const uniqueId = useId(); 
    const [show, setShow] = useState(false);
    const [selectedCitiesFromState, setSelectedCitiesFromState] = useState([] as any)

    useEffect(() => {
      setShow(props?.show)
    }, [props])

const [addOwnHotel, setAddOwnHotel] = useState({
    id: uniqueId,
    hotelName: "",
    hotelPreferences: "",
    checkInTime: "",
    checkOutTime: "",
    address: "",
    pincode: "",
    website: "",
    description: "",
    country: "",
    state: "",
    city: "",
    hotelFeatures: [
        {id: 1, isChecked: false, serviceName: "24 Hour Reception"},
        {id: 2, isChecked: false, serviceName: "Air Conditioned"},
        {id: 3, isChecked: false, serviceName: "Allergy-Free Room Available"},
        {id: 4, isChecked: false, serviceName: "ATM / Cash Machine"},
        {id: 5, isChecked: false, serviceName: "Baby Listening/Monitoring"},
        {id: 6, isChecked: false, serviceName: "Babysitting - Child Services"},
        {id: 7, isChecked: false, serviceName: "Ballroom"},
        {id: 8, isChecked: false, serviceName: "Banquet Facilities"},
        {id: 9, isChecked: false, serviceName: "Bar / Lounge"},
        {id: 10, isChecked: false, serviceName: "Bath / Hot Tub"},
        {id: 11, isChecked: false, serviceName: "Bath Menu"},
        {id: 12, isChecked: false, serviceName: "Bathrobes"},
        {id: 13, isChecked: false, serviceName: "Bathtub/Shower Combination"},
        {id: 14, isChecked: false, serviceName: "Beach (Direct Access)"},
        {id: 15, isChecked: false, serviceName: "Beach (Nearby)"},
        {id: 16, isChecked: false, serviceName: "Beach Soccer and Volleyball"},
        {id: 17, isChecked: false, serviceName: "Beauty Salon"},
        {id: 18, isChecked: false, serviceName: "Bedding/Pillow Choices"},
        {id: 19, isChecked: false, serviceName: "Bicycle Rental"},
        {id: 20, isChecked: false, serviceName: "Bidet"},
        {id: 21, isChecked: false, serviceName: "Billiards"},
        {id: 22, isChecked: false, serviceName: "Boating"},
        {id: 23, isChecked: false, serviceName: "Body Treatments"},
        {id: 24, isChecked: false, serviceName: "Bowling Alley"},
        {id: 25, isChecked: false, serviceName: "Breakfast in the Room"},
        {id: 26, isChecked: false, serviceName: "Business Center"},
        {id: 27, isChecked: false, serviceName: "Cable - Satellite TV"},
        {id: 28, isChecked: false, serviceName: "Canoeing"},
        {id: 29, isChecked: false, serviceName: "Casino"},
        {id: 30, isChecked: false, serviceName: "CD Player"},
        {id: 31, isChecked: false, serviceName: "Cell phone/mobile rental"},
        {id: 32, isChecked: false, serviceName: "Ceremonies"},
        {id: 33, isChecked: false, serviceName: "Child Pool"},
        {id: 34, isChecked: false, serviceName: "Clay Pigeon Shooting"},
        {id: 35, isChecked: false, serviceName: "Coffee Or Tea Maker"},
        {id: 36, isChecked: false, serviceName: "Coffee Shop/Cafeteria"},
        {id: 37, isChecked: false, serviceName: "Complimentary Toiletries"},
        {id: 38, isChecked: false, serviceName: "Computer"},
        {id: 39, isChecked: false, serviceName: "Concierge"},
        {id: 40, isChecked: false, serviceName: "Conference Manager"},
        {id: 41, isChecked: false, serviceName: "Conference Room(s)"},
        {id: 42, isChecked: false, serviceName: "Connecting Rooms"},
        {id: 43, isChecked: false, serviceName: "Convention Center"},
        {id: 44, isChecked: false, serviceName: "Cots"},
        {id: 45, isChecked: false, serviceName: "Courier"},
        {id: 46, isChecked: false, serviceName: "Cricket Pitch"},
        {id: 47, isChecked: false, serviceName: "Currency Exchange"},
        {id: 48, isChecked: false, serviceName: "Custom event planning available"},
        {id: 49, isChecked: false, serviceName: "Cycling"},
        {id: 50, isChecked: false, serviceName: "Dart Board"},
        {id: 51, isChecked: false, serviceName: "Designated Smoking Area"},
        {id: 52, isChecked: false, serviceName: "Desk"},
        {id: 53, isChecked: false, serviceName: "Disabled Access"},
        {id: 54, isChecked: false, serviceName: "Disabled Accessible Rooms"},
        {id: 55, isChecked: false, serviceName: "Disabled Parking"},
        {id: 56, isChecked: false, serviceName: "Diving Centre"},
        {id: 57, isChecked: false, serviceName: "Dry Cleaning"},
        {id: 58, isChecked: false, serviceName: "DVD Player"},
        {id: 59, isChecked: false, serviceName: "Ecotours on Site"},
        {id: 60, isChecked: false, serviceName: "Elevator / Lift"},
        {id: 61, isChecked: false, serviceName: "En suite"},
        {id: 62, isChecked: false, serviceName: "Excursions"},
        {id: 63, isChecked: false, serviceName: "Executive Floor"},
        {id: 64, isChecked: false, serviceName: "Exhibit Space"},
        {id: 65, isChecked: false, serviceName: "Express Check-In/Check-Out"},
        {id: 66, isChecked: false, serviceName: "Facial Treatments"},
        {id: 67, isChecked: false, serviceName: "Facsimile"},
        {id: 68, isChecked: false, serviceName: "Family Room"},
        {id: 69, isChecked: false, serviceName: "Fine Dining"},
        {id: 70, isChecked: false, serviceName: "Fishing"},
        {id: 71, isChecked: false, serviceName: "Fitness Room Or Gym"},
        {id: 72, isChecked: false, serviceName: "Football Field"},
        {id: 73, isChecked: false, serviceName: "Full-service catering"},
        {id: 74, isChecked: false, serviceName: "Function Rooms"},
        {id: 75, isChecked: false, serviceName: "Games Available"},
        {id: 76, isChecked: false, serviceName: "Garden"},
        {id: 77, isChecked: false, serviceName: "Gay/Lesbian Friendly"},
        {id: 78, isChecked: false, serviceName: "Golf (miniature)"},
        {id: 79, isChecked: false, serviceName: "Golf Course"},
        {id: 80, isChecked: false, serviceName: "Golf Course (nearby)"},
        {id: 81, isChecked: false, serviceName: "Golf Course (on site)"},
        {id: 82, isChecked: false, serviceName: "Grab bars in bathroom"},
        {id: 83, isChecked: false, serviceName: "Hair Dryer"},
        {id: 84, isChecked: false, serviceName: "High-speed Internet is available at this hotel"},
        {id: 85, isChecked: false, serviceName: "Highchairs"},
        {id: 86, isChecked: false, serviceName: "Hiking"},
        {id: 87, isChecked: false, serviceName: "Horse Riding"},
        {id: 88, isChecked: false, serviceName: "Ice Machine"},
        {id: 89, isChecked: false, serviceName: "In Room Movies"},
        {id: 90, isChecked: false, serviceName: "Jacuzzi"},
        {id: 91, isChecked: false, serviceName: "Jet-Ski"},
        {id: 92, isChecked: false, serviceName: "Karaoke"},
        {id: 93, isChecked: false, serviceName: "Kayaking"},
        {id: 94, isChecked: false, serviceName: "Kids Club"},
        {id: 95, isChecked: false, serviceName: "Kitchenette"},
        {id: 96, isChecked: false, serviceName: "Knock Light (Hearing Impaired)"},
        {id: 97, isChecked: false, serviceName: "Lake"},
        {id: 98, isChecked: false, serviceName: "Laptop"},
        {id: 99, isChecked: false, serviceName: "Late check-out (subject to availability)"},
        {id: 100, isChecked: false, serviceName: "Laundry service"},
        {id: 101, isChecked: false, serviceName: "Luggage Storage"},
        {id: 102, isChecked: false, serviceName: "Massage"},
        {id: 103, isChecked: false, serviceName: "Massage Or Beauty Centre"},
        {id: 104, isChecked: false, serviceName: "Meeting Coordinator"},
        {id: 105, isChecked: false, serviceName: "Meeting Rooms"},
        {id: 106, isChecked: false, serviceName: "Microwave"},
        {id: 107, isChecked: false, serviceName: "Mini Bar"},
        {id: 108, isChecked: false, serviceName: "Mountain Climbing"},
        {id: 109, isChecked: false, serviceName: "Multilingual Staff"},
        {id: 110, isChecked: false, serviceName: "Nature Trail"},
        {id: 111, isChecked: false, serviceName: "News Stand"},
        {id: 112, isChecked: false, serviceName: "Nightclubs"},
        {id: 113, isChecked: false, serviceName: "Non-Smoking Rooms"},
        {id: 114, isChecked: false, serviceName: "Office Supplies"},
        {id: 115, isChecked: false, serviceName: "Outdoor heated pool"},
        {id: 116, isChecked: false, serviceName: "Packed Lunches"},
        {id: 117, isChecked: false, serviceName: "Parking is available"},
        {id: 118, isChecked: false, serviceName: "Personal Shopper Service"},
        {id: 119, isChecked: false, serviceName: "Pet Friendly"},
        {id: 120, isChecked: false, serviceName: "Photocopier"},
        {id: 121, isChecked: false, serviceName: "Picnic Area/Tables"},
        {id: 122, isChecked: false, serviceName: "Pillow Top Mattress"},
        {id: 123, isChecked: false, serviceName: "Playground"},
        {id: 124, isChecked: false, serviceName: "Pool Indoor"},
        {id: 125, isChecked: false, serviceName: "Pool Outdoor"},
        {id: 126, isChecked: false, serviceName: "Poolside Bar"},
        {id: 127, isChecked: false, serviceName: "Porters"},
        {id: 128, isChecked: false, serviceName: "Private Bathroom"},
        {id: 129, isChecked: false, serviceName: "Private beach"},
        {id: 130, isChecked: false, serviceName: "Private Toilet"},
        {id: 131, isChecked: false, serviceName: "Pub"},
        {id: 132, isChecked: false, serviceName: "Refrigerator"},
        {id: 133, isChecked: false, serviceName: "Restaurant"},
        {id: 134, isChecked: false, serviceName: "Rock Climbing"},
        {id: 135, isChecked: false, serviceName: "Room Service"},
        {id: 136, isChecked: false, serviceName: "Safe-Deposit Box"},
        {id: 137, isChecked: false, serviceName: "Salon"},
        {id: 138, isChecked: false, serviceName: "Sauna"},
        {id: 139, isChecked: false, serviceName: "Scooter/moped rentals are available at the hotel"},
        {id: 140, isChecked: false, serviceName: "Scuba Diving"},
        {id: 141, isChecked: false, serviceName: "Secretarial Service"},
        {id: 142, isChecked: false, serviceName: "Security Guard"},
        {id: 143, isChecked: false, serviceName: "Self Laundry"},
        {id: 144, isChecked: false, serviceName: "Shared Bathroom"},
        {id: 145, isChecked: false, serviceName: "Shoe Shine"},
        {id: 146, isChecked: false, serviceName: "Shops"},
        {id: 147, isChecked: false, serviceName: "Shops in Hotel"},
        {id: 148, isChecked: false, serviceName: "Shower"},
        {id: 149, isChecked: false, serviceName: "Skating Rink"},
        {id: 150, isChecked: false, serviceName: "Smoking Room"},
        {id: 151, isChecked: false, serviceName: "Souvenirs-Gift Shop"},
        {id: 152, isChecked: false, serviceName: "Spa & Wellness Centre"},
        {id: 153, isChecked: false, serviceName: "Spa bath / Jacuzzi"},
        {id: 154, isChecked: false, serviceName: "Squash Courts"},
        {id: 155, isChecked: false, serviceName: "Steam Bath"},
        {id: 156, isChecked: false, serviceName: "Supervised child care/activities"},
        {id: 157, isChecked: false, serviceName: "Surfing"},
        {id: 158, isChecked: false, serviceName: "Swimming pool"},
        {id: 159, isChecked: false, serviceName: "Tennis Courts"},
        {id: 160, isChecked: false, serviceName: "Tennis Courts (indoor)"},
        {id: 161, isChecked: false, serviceName: "The hotel has free parking"},
        {id: 162, isChecked: false, serviceName: "There is an airport shuttle that runs from the hotel"},
        {id: 163, isChecked: false, serviceName: "There is no parking on site"},
        {id: 164, isChecked: false, serviceName: "Ticket Service"},
        {id: 165, isChecked: false, serviceName: "Tour Desk"},
        {id: 166, isChecked: false, serviceName: "Towels"},
        {id: 167, isChecked: false, serviceName: "TV"},
        {id: 168, isChecked: false, serviceName: "Valet parking is offered at the hotel"},
        {id: 169, isChecked: false, serviceName: "Vending Machines"},
        {id: 170, isChecked: false, serviceName: "Video Conferencing"},
        {id: 171, isChecked: false, serviceName: "Volleyball"},
        {id: 172, isChecked: false, serviceName: "Wake-up Service"},
        {id: 173, isChecked: false, serviceName: "Water Activities"},
        {id: 174, isChecked: false, serviceName: "Water-skiing"},
        {id: 175, isChecked: false, serviceName: "Windsurfing"},
        {id: 176, isChecked: false, serviceName: "Wine Tasting"},
        {id: 177, isChecked: false, serviceName: "Wireless internet on site"},
        {id: 178, isChecked: false, serviceName: "Breakfast"},
        {id: 179, isChecked: false, serviceName: "Lunch"},
        {id: 80, isChecked: false, serviceName: "Dinner"},
        {id: 181, isChecked: false, serviceName: "Evening Snacks"},
    ]
})

const {
    hotelName,
    hotelPreferences,
    checkInTime,
    checkOutTime,
    address,
    pincode,
    website,
    description,
    country,
    state,
    city,
    hotelFeatures,
} = addOwnHotel

const handleChangeAddOwnHotel = (e: any) => {
    const target = e.target;
    const name = target.name; 
  
    setAddOwnHotel({
      ...addOwnHotel,
      [name]: target.value
    });

     if(name === "state") { 
      setSelectedCitiesFromState(stateCitiesMap[target.value]);
    }
}

const handleChangeHotelFeaturesCheckBox = (id:any) => {
    setAddOwnHotel((prevCreateLead: any) => {
      const updatedServiceList = prevCreateLead.hotelFeatures.map((service:any) =>
        service.id === id
          ? { ...service, isChecked: !service.isChecked }
          : service
      );

      return {
        ...prevCreateLead,
        hotelFeatures: updatedServiceList,
      };
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={props?.onHide}
        dialogClassName="modal-95w"
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h5>Add Own Hotel</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h6>Hotel Details</h6>
            <div className="line_devider_inside"></div>
                <Row>
                    <Form.Group as={Col} md="3" controlId="validationCustom">
                        <Form.Label>Hotel Name <span className='required'>*</span></Form.Label>
                        <CustomTextInput required = {true} value = {hotelName} onChange = {handleChangeAddOwnHotel} name = "hotelName" />      
                    </Form.Group> 
                    <Form.Group as={Col} md="2" controlId="validationCustom">
                        <Form.Label>Hotel Star <span className='required'>*</span></Form.Label>
                        <CustomDropdown required = {true} value = {hotelPreferences} onChange = {handleChangeAddOwnHotel} name = "hotelPreferences" dropdownData = {selectHotelPreferences} />     
                    </Form.Group>  
                    <Form.Group as={Col} md="2" controlId="validationCustom">
                        <Form.Label>Check In <span className='required'>*</span></Form.Label>
                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {checkInTime} onChange = {handleChangeAddOwnHotel} name = "checkInTime" placeholder="Eg. 01:00 PM" />    
                    </Form.Group>  
                    <Form.Group as={Col} md="2" controlId="validationCustom">
                        <Form.Label>Check Out <span className='required'>*</span></Form.Label>
                        <CustomNumberInput onKeyPress = {onKeyPress} required = {true} value = {checkOutTime} onChange = {handleChangeAddOwnHotel} name = "checkOutTime" placeholder="Eg. 01:00 PM" />
                    </Form.Group> 
                    <Form.Group as={Col} md="3" controlId="validationCustom">
                        <Form.Label>Address</Form.Label>
                        <CustomTextInput required = {false} value = {address} onChange = {handleChangeAddOwnHotel} name = "address" />      
                    </Form.Group> 
                    <Form.Group as={Col} md="3" controlId="validationCustom" className='mt-3'>
                        <Form.Label>Pincode</Form.Label>
                        <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {pincode} onChange = {handleChangeAddOwnHotel} name = "pincode"/>
                    </Form.Group>  
                    <Form.Group as={Col} md="2" controlId="validationCustom" className='mt-3'>
                        <Form.Label>Country</Form.Label>
                        <CustomDropdown required = {true} value = {country} onChange = {handleChangeAddOwnHotel} name = "country" dropdownData = {selectCountries} />           
                    </Form.Group>
                    {
                        country === "India" ? <>
                        <Form.Group as={Col} md="2" controlId="validationCustom" className='mt-3'>
                            <Form.Label>State</Form.Label>
                            <CustomDropdown required = {false} value = {state} onChange = {handleChangeAddOwnHotel} name = "state" dropdownData = {selectStatesInIndia} />
                        </Form.Group>   
                        <Form.Group as={Col} md="2" controlId="validationCustom" className='mt-3'>
                            <Form.Label>City</Form.Label>
                            <CustomDropdown required = {false} value = {city} onChange = {handleChangeAddOwnHotel} name = "city" dropdownData = {selectedCitiesFromState} />
                        </Form.Group> 
                        </> : <>
                            <Form.Group as={Col} md="2" controlId="validationCustom" className='mt-3'>
                            <Form.Label>State</Form.Label>
                            {/* <CustomDropdown required = {false} value = {state} onChange = {handleChangeSearchHotel} name = "state" dropdownData = {selectStatesInIndia} /> */}
                            <CustomTextInput required = {true} value = {state} onChange = {handleChangeAddOwnHotel} name = "state" />
                            </Form.Group>   
                            <Form.Group as={Col} md="2" controlId="validationCustom" className='mt-3'>
                            <Form.Label>City</Form.Label>
                            {/* <CustomDropdown required = {false} value = {city} onChange = {handleChangeSearchHotel} name = "city" dropdownData = {selectedCitiesFromState} /> */}
                            <CustomTextInput required = {true} value = {city} onChange = {handleChangeAddOwnHotel} name = "city" />
                            </Form.Group> 
                        </>
                    }
                    
                    <Form.Group as={Col} md="3" controlId="validationCustom" className='mt-3'>
                        <Form.Label>Website</Form.Label>
                        <CustomTextInput required = {false} value = {website} onChange = {handleChangeAddOwnHotel} name = "website" />      
                    </Form.Group>
                    <Form.Group as={Col} md="5" className='mt-3' controlId="validationCustom">
                        <Form.Label>Description</Form.Label>
                        <CustomeTextarea value = {description} onChange = {handleChangeAddOwnHotel} name = "description" />
                    </Form.Group>
                </Row>
            <br />
            <h6>Hotel Images</h6>
            <div className="line_devider_inside"></div>
                <Row></Row>
            <br />
            <h6>Hotel Features</h6> 
            <div className="line_devider_inside"></div>
                <Row>
                    {
                      hotelFeatures?.map((service: any) => <Form.Group as={Col} md="3" key={service?.serviceName} className='checkbox_customeStyle'>
                        <label key={service.id}>
                          <input
                            type="checkbox"
                            checked={service.isChecked}
                            onChange={() => handleChangeHotelFeaturesCheckBox(service.id)}
                          />
                          {service.serviceName}
                        </label>
                      </Form.Group>)
                    }
                </Row>
                <Row>
                
                <Modal.Footer className='mt-4'>
                <br />
                <Button variant="secondary" onClick={props?.onHide}>
                    Close
                </Button>
                <Button variant="primary" type='submit'>Submit</Button>
                </Modal.Footer>
                </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddOwnHotel