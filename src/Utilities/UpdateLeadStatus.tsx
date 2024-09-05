import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import Form from 'react-bootstrap/Form';
import { changeLeadStatus, selectHotelPreferences } from '../constants';
import axios from 'axios';
import CustomToast from './CustomToast';
import Button from '../components/buttons';
import CustomDropdown from './CustomDropdown';

const UpdateLeadStatus = (props: any) => { 

  const [leadData, setLeadData] = useState([] as any)
  const [leadstatus, setLeadstatus] = useState([] as any)
  const [statusCode, setStatusCode] = useState("" as any) 
  const [showToast, setshowToast] = useState(false) 

  useEffect(() => {
    axios.get("http://localhost:8000/createlead").then((response: any) => setLeadData(response?.data))
  }, [])

  const handleUpdateLead = async (updateLead: any) => {
    props?.closeModal(false);
    try {
      const response = await axios.patch(`http://localhost:8000/createlead/${updateLead}`, {
          leadstatus: leadstatus
      });

      if (response.status === 200) {
        setStatusCode("success")
        setshowToast(true)
      } else if (response.status === 201) { 
        setStatusCode("success")
        setshowToast(true)
      } else { 
        setStatusCode("success")
        setshowToast(true)
      }
    } catch (error) {
      setStatusCode("danger")
      setshowToast(true)
      console.error('Error updating lead status:', error);
    }
  }

  // const handleRemoveLead = (deleteLead: any) => {
  //   console.log("deleteLead", deleteLead)
  //   const updatedLeads = leadData.filter((lead: any) => lead.id !== deleteLead);
  //   setLeadData(updatedLeads);
  // }

  async function handleRemoveLead(deleteLead: any) {
    props?.closeModal(false);
    try {
        const response = await axios.delete(`http://localhost:8000/createlead/${deleteLead}`);
        console.log('Resource deleted:', response.data);
        if (response.status === 200) {
          setStatusCode("success")
          setshowToast(true)
        } else if (response.status === 201) { 
          setStatusCode("success")
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

const handleOnchangeStatus = (e: any) => {
    const target = e.target;
    const value = target.value; 
    setLeadstatus(value);
}

console.log("leadSelectedData", leadstatus)
useEffect(() => {
  
  return () => {
    setshowToast(false)
  }
 }, [])

  console.log("leadData from delete", leadData)

  return (
    <>
    <CustomToast showToast = {showToast} variantType = {statusCode}/>
   
    <Modal show={props?.show} onHide={props?.onHide}>
        { props?.selectedItem === "Change Lead Status" ? <><Modal.Header closeButton>
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

        { props?.selectedItem === "Remove Lead" ? <><Modal.Header closeButton>
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