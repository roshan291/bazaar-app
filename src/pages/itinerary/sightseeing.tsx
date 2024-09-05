import React, { useEffect, useState } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import CustomTextInput from '../../Utilities/CustomTextInput';
import CustomeTextarea from '../../Utilities/CustomeTextarea';
import Row from 'react-bootstrap/esm/Row';
import { selectMeal } from '../../constants';
import Col from 'react-bootstrap/esm/Col';

const Sightseeing = (props: any) => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setShow(props?.show)
  }, [props])

  return (
    <>
     <Modal
        show={show}
        onHide={props?.onHide}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title> <h5>Sightseeing</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Sightseeing Inprogress
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.onHide}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Sightseeing