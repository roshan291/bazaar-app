import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import CustomTextInput from '../../../../Utilities/CustomTextInput';
import CustomDropdown from '../../../../Utilities/CustomDropdown';
import CustomNumberInput from '../../../../Utilities/CustomNumberInput';
import CustomDatePicker from '../../../../Utilities/CustomDatePicker';
import { onKeyPress } from '../../../../Utilities/Utils';
import { selectCouple, selectCurrency, selectTypeOfHoliday, selectWelcomeNote } from '../../../../constants';

 
const StepOne = ({ formData, handleChange }: any) => {
    const handleChangeLeadCheckBox = (id:any) => {
        formData((prevCreateLead: any) => {
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

  return (
    <Row>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column className='d-flex align-items-start justify-content-start'>Itinerary Title<span className='required'>*</span></Form.Label>
              <Col>
                  <CustomTextInput required = {false} value = {formData?.itineraryTitle} onChange = {handleChange("itineraryTitle")} name = "itineraryTitle" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column className='d-flex align-items-start justify-content-start'>Destination</Form.Label>
              <Col>
                  <CustomTextInput required = {false} value = {formData?.destination} onChange = {handleChange('destination')} name = "destination" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column className='d-flex align-items-start justify-content-start'>Type of Holidays<span className='required'>*</span></Form.Label>
              <Col>
              <CustomDropdown required = {false} value = {formData?.typeOfHoliday} onChange = {handleChange("typeOfHoliday")} name = "typeOfHoliday" dropdownData = {selectTypeOfHoliday} />
              </Col>
          </Form.Group>
      </Col>

      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Adults</Form.Label>
              <Col >
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {formData?.noOfAdults} onChange = {handleChange("noOfAdults")} name = "noOfAdults" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Child</Form.Label>
              <Col >
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {formData?.noOfKids} onChange = {handleChange("noOfKids")} name = "noOfKids" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Start Date</Form.Label>
              <Col >
                  <CustomDatePicker required = {false} value = {formData?.startDate} onChange = {handleChange("startDate")} name = "startDate" minDate = {new Date().toISOString().split("T")[0]} />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>End Date</Form.Label>
              <Col >
                  <CustomDatePicker required = {false} value = {formData?.endDate} onChange = {handleChange("endDate")} name = "endDate" minDate = {new Date().toISOString().split("T")[0]} />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Nights</Form.Label>
              <Col >
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {formData?.noOfNights} onChange = {handleChange("noOfNights")} name = "noOfNights" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Travellers</Form.Label>
              <Col >
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {formData?.travellers} onChange = {handleChange("travellers")} name = "travellers" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Budget/Cost</Form.Label>
              <Col >
                  <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {formData?.budgetForTrip} onChange = {handleChange("budgetForTrip")} name = "budgetForTrip" />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Cost For</Form.Label>
              <Col >
                  <CustomDropdown required = {false} value = {formData?.coupleList} onChange = {handleChange("coupleList")} name = "coupleList" dropdownData = {selectCouple} />
              </Col>
          </Form.Group>
      </Col>
      <Col sm="4">
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <Form.Label column  className='d-flex align-items-start justify-content-start'>Currency</Form.Label>
              <Col >
                  <CustomDropdown required = {false} value = {formData?.currencyType} onChange = {handleChange("currencyType")} name = "currencyType" dropdownData = {selectCurrency} />
              </Col>
          </Form.Group>
      </Col>
      
      <Row>
          <Form.Group className="mb-1" controlId="Itinerary Title">
              <h6 className="mb-2 mt-3">Tour Cost Cover</h6>
              <Col sm="12">
              <Row className="mb-12">
                  {
                  formData?.serviceList?.map((service: any) => <Form.Group as={Col} md="3" key={service?.serviceName} className='checkbox_customeStyle'>
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
          <Col sm="4">
          <Form.Group className="mb-4" controlId="Itinerary Title">
              <br />
              <Form.Label column className='d-flex align-items-start justify-content-start'>Welcome Note</Form.Label>
              <Col> 
                  <CustomDropdown required = {false} value = {formData?.welcomenote} onChange = {handleChange("welcomenote")} name = "welcomenote" dropdownData = {selectWelcomeNote} />
              </Col>
          </Form.Group>
      </Col>
      </Row>
    </Row>
  );
};

export default StepOne;
