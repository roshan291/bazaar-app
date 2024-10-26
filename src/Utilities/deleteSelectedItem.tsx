import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import Form from 'react-bootstrap/Form'; 
// import CustomToast from './CustomToast';/
import Button from '../components/buttons';
import { _delete } from '../API/useApi';
import CustomToast from './CustomToast';

const DeleteSelectedItem = (props: any) => {

const [statusCode, setStatusCode] = useState("" as any) 
const [showToast, setshowToast] = useState(false) 

 

const dynamicURL = () => {
  let endpointurl = ""
  // createcustomer
  if(props?.journey === "mycustomer") {
    endpointurl = "createcustomer";
  }
  if(props?.journey === "invoice") {
    endpointurl = "createinvoice";
  }
  if(props?.journey === "itinerary") {
    endpointurl = "createitinerary";
  }
  
  return endpointurl;
}


const handleDelete = async (id: any) => {
    props?.closeModal(false);
    try {
        const response = await _delete(`/${dynamicURL()}/${id}`);
        console.log("response", response)
        if (response.status === 200) {
          setStatusCode("primary")
          setshowToast(true)
        } else if (response.status === 201) { 
          setStatusCode("primary")
          setshowToast(true)
        } else { 
          setStatusCode("danger")
          setshowToast(true)
        }
    } catch (error) { 
        setStatusCode("danger")
        setshowToast(true)
    }
}

return (
<>
    {/* <CustomToast showToast = {showToast} variantType = {statusCode}/> */}
    <Modal show={props?.show} onHide={props?.onHide}>
    <Modal.Header closeButton>
        <Modal.Title><h5>Are you sure you want to delete this lead - {props?.id}? </h5></Modal.Title>
    </Modal.Header>
    <Modal.Footer>
        <Button variant="secondary" onClick={props?.onHide}>
        Cancel
        </Button>
        <Button variant="primary" onClick={() => handleDelete(props?.id)}>
        Delete
        </Button>
    </Modal.Footer>
</Modal>
</>
)
}

export default DeleteSelectedItem