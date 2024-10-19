import React, { useEffect, useState, useId} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomTextInput from '../../Utilities/CustomTextInput';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import CustomCustomerDropdown from '../../Utilities/CustomCustomerDropdown.';
import { selectVehicleType } from '../../constants';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import { selectCountries } from '../../constants/countries';
import CustomDropdown from '../../Utilities/CustomDropdown';
import CustomDatePicker from '../../Utilities/CustomDatePicker';
import CustomTimePicker from '../../Utilities/CustomTimePicker';

const Transportation = (props: any) => {
    const uniqueId = useId(); 
    const [show, setShow] = useState(false); 
    const [validated, setValidated] = useState(false);
    useEffect(() => {
        setShow(props?.show)
    }, [props])

    const [transportation, setTransportation] = useState({
        id: uniqueId,
        transportationTitle: "",
        transpotationMode: "",
        departingCountry: "",
        departingCity: "",
        startingPoint: "",
        departDate: "",
        actualDepartureTime: "",
        reportingTime: "",
        arrivalCountry: "",
        arrivalCity: "",
        endingPoint: "",
        arrialDate: "",
        actualArrivalTime: "",
        transpotationNote: "",
    })

    const {
        transportationTitle,
        transpotationMode,
        departingCountry,
        departingCity,
        startingPoint,
        departDate,
        actualDepartureTime,
        reportingTime,
        arrivalCountry,
        arrivalCity,
        endingPoint,
        arrialDate,
        actualArrivalTime,
        transpotationNote,
    } = transportation

    const handleChangetransportation = (e: any) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setTransportation({
          ...transportation,
          [name]: value
        });
    }

    const onSubmitTransportation = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) { 
          event.stopPropagation();
        } else {
          props?.getDayTransportation([transportation])
        }
      }

    return (
        <>           
            <Modal
                show={show}
                onHide={props?.onHide}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <h5>Transportation Information</h5>
                </Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={onSubmitTransportation}>
                    <Modal.Body>
                        <Row>
                            <Col>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-3'>
                                <Form.Label>Title</Form.Label>
                                <CustomTextInput required = {true} value = {transportationTitle} onChange = {handleChangetransportation} name = "transportationTitle" />
                            </Form.Group>  
                            <h6>Departing Information</h6>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Depart country</Form.Label>
                                <CustomDropdown required = {true} value = {departingCountry} onChange = {handleChangetransportation} name = "departingCountry" dropdownData = {selectCountries} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Depart city</Form.Label>
                                <CustomTextInput required = {true} value = {departingCity} onChange = {handleChangetransportation} name = "departingCity" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Starting point</Form.Label>
                                <CustomTextInput required = {true} value = {startingPoint} onChange = {handleChangetransportation} name = "startingPoint" />
                            </Form.Group> 
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Depart date</Form.Label>
                                <CustomDatePicker required = {true} value = {departDate} onChange = {handleChangetransportation} name = "departDate" minDate = {new Date().toISOString().split("T")[0]} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Actual departure time</Form.Label>
                                <CustomTimePicker required = {true} value = {actualDepartureTime} onChange = {handleChangetransportation} name = "actualDepartureTime" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Reporting time</Form.Label>
                                <CustomTimePicker required = {true} value = {reportingTime} onChange = {handleChangetransportation} name = "reportingTime" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Actual arrival time</Form.Label>
                                <CustomTimePicker required = {true} value = {actualArrivalTime} onChange = {handleChangetransportation} name = "actualArrivalTime" />
                            </Form.Group>
                            </Col>
                            <Col>
                            
                            <Form.Group as={Col} controlId="validationCustom" className='mb-3'>
                                <Form.Label>Transportation Mode</Form.Label>
                                <CustomDropdown required = {true} value = {transpotationMode} onChange = {handleChangetransportation} name = "transpotationMode" dropdownData = {selectVehicleType} />
                            </Form.Group>
                            <h6>Arrival Information</h6>
                            <Form.Label>Arrival country</Form.Label>
                                <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <CustomDropdown required = {true} value = {arrivalCountry} onChange = {handleChangetransportation} name = "arrivalCountry" dropdownData = {selectCountries} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Arrival city</Form.Label>
                                <CustomTextInput required = {true} value = {arrivalCity} onChange = {handleChangetransportation} name = "arrivalCity" />
                            </Form.Group> 
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Ending point</Form.Label>
                                <CustomTextInput required = {true} value = {endingPoint} onChange = {handleChangetransportation} name = "endingPoint" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                                <Form.Label>Arrival date</Form.Label>
                                <CustomDatePicker required = {true} value = {arrialDate} onChange = {handleChangetransportation} name = "arrialDate" minDate = {new Date().toISOString().split("T")[0]} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustom" className='mb-2'>
                            <Form.Label>Transpotation Note</Form.Label>
                                <CustomeTextarea value = {transpotationNote} onChange = {handleChangetransportation} name = "transpotationNote" />
                            </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <br />
                        <Button variant="secondary" onClick={props?.onHide}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default Transportation