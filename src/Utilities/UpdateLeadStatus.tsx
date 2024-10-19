import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import Form from 'react-bootstrap/Form';
import { changeLeadStatus, selectHotelPreferences } from '../constants';
// import CustomToast from './CustomToast';
import Button from '../components/buttons';
import CustomDropdown from './CustomDropdown';
import { _delete, _patch } from '../API/useApi';

const UpdateLeadStatus = (props: any) => { 

  // const [leadData, setLeadData] = useState([] as any)
  const [leadstatus, setLeadstatus] = useState([] as any)
  const [statusCode, setStatusCode] = useState("" as any) 
  const [showToast, setshowToast] = useState(false) 

  // useEffect(() => {
  //   axios.get("http://localhost:8000/createlead").then((response: any) => setLeadData(response?.data))
  // }, [])


  const handleUpdateLead = async (updateLead: any) => {
    props?.closeModal(false);
    try {
      const response = await _patch(`/createlead/${updateLead}`, {
        leadstatus: leadstatus
    })
    } catch (error) {
      setStatusCode("danger")
      setshowToast(true)
      console.error('Error updating lead status:', error);
    }
  }


  async function handleRemoveLead(deleteLead: any) {
    props?.closeModal(false);
    try {
        await _delete(`/createlead/${deleteLead}`);
    } catch (error) { 
        setStatusCode("danger")
        setshowToast(true)
    }
}

const handleOnchangeStatus = (e: any) => {
    const target = e.target;
    const value = target.value;                 
    setLeadstatus(value);
}

 
useEffect(() => {
  
  return () => {
    setshowToast(false)
  }
 }, [])


  return (
    <>
    <Modal show={props?.show} onHide={props?.onHide}>
        { props?.selectedItem?.navTitle === "Change Lead Status" ? <><Modal.Header closeButton>
          <Modal.Title><h5>Change the lead status - {props?.id}</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CustomDropdown placeholder = "Select lead status to update..." required = {true} value = {leadstatus} onChange = {handleOnchangeStatus} name = "leadstatus" dropdownData = {changeLeadStatus} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleUpdateLead(props?.id)}>
            Update
          </Button>
        </Modal.Footer> </>: <></>}

        { props?.selectedItem?.navTitle === "Remove Lead" ? <><Modal.Header closeButton>
          <Modal.Title><h5>Are you sure you want to delete this lead - {props?.id}? </h5></Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleRemoveLead(props?.id)}>
            Delete
          </Button>
        </Modal.Footer> </>: <></>}
    </Modal>
    </>
  )
}

export default UpdateLeadStatus