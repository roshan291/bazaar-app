import React, { useEffect, useState, useId } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import CustomTextInput from '../../Utilities/CustomTextInput';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import Row from 'react-bootstrap/esm/Row';
import { selectMeal } from '../../constants';
import Col from 'react-bootstrap/esm/Col';
import CustomDatePicker from '../../Utilities/CustomDatePicker';

const NextDay = (props: any) => {
  const uniqueId = useId(); 
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [daysList, setDaysList] = useState([] as any);

  useEffect(() => {
    setShow(props?.show)
  }, [props])

  const [daySelect, setDaySelect] = useState({
    id: uniqueId,
    dayTitle: "",
    dayDate: "",
})

const {dayTitle, dayDate} = daySelect;

const handleChangeDaySelect = (e: any) => {
    const target = e.target;
  
    const value = target.value;
    const name = target.name;
  
    console.log("target.value", target.value)

    setDaySelect({
      ...daySelect,
      [name]: value
    });
}

const onSubmitCreateNewDay = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("All date Not Verified handleCreateNewCustomer");
      event.stopPropagation();
    } else {
      // console.log("onSubmitCreateNewDay", daySelect) ;
       props?.getnextDayData(`${dayTitle} | ${dayDate}`)

      // setDaysList([...daysList, daySelect]);  
      // props?.getnextDayData([...daysList, daySelect]); 
      // setDaySelect({ dayTitle: "", dayDate: "" }); 
    }
}
  return (
    <>
     <Modal
        show={show}
        onHide={props?.onHide}
        backdrop="static"
       
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title><h5>Day Information</h5></Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={onSubmitCreateNewDay}>
            <Modal.Body>
            <Row>
            <Col xs={12} md={6}>
                <Form.Group as={Col} controlId="validationCustom">
                    <Form.Label>Title<span className='required'>*</span></Form.Label>
                    <CustomTextInput required = {true} value = {dayTitle} onChange = {handleChangeDaySelect} name = "dayTitle" />
                </Form.Group> 
            </Col>
            <Col xs={23} md={6}>
                <Form.Group as={Col} controlId="validationCustom">
                    <Form.Label>Date<span className='required'>*</span></Form.Label>
                    <CustomDatePicker required = {true} value = {dayDate} onChange = {handleChangeDaySelect} name = "dayDate" />
                </Form.Group> 
            </Col>
          </Row>
             
            <br /> 
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

export default NextDay