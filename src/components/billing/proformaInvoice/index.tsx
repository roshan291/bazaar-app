import React, { useEffect, useState } from 'react'
import Button from '../../buttons';
import ViewInvoice from '../../../Utilities/ViewInvoice';
import axios from 'axios';
import { navigationURL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import styles from "../invoice/invoice.module.css"
import { Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSquarePlus, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const ProformaInvoice = () => {
  const [navigateUrl, setNavigateUrlUrl] = useState("");
  const [invoiceRowData, setInvoiceRowData] = useState([] as any)
  const [rowData, setrowData] = useState([invoiceRowData] as any)
  const [isInvoice, setInvoice] = useState(true)
  const [isAllInvoice, setAllInvoice] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("All" as any)
  const navigate = useNavigate(); 
  
  const {
    createLead,
    manageLead,
    dashboard,
    customisedItinerary,
    groupItinerary,
    readyItinerary,
    proformainvoice,
    invoice,
    customerView,
    createinvoice,
  } = navigationURL;

  const handleCreateInvoice = () => {
    navigate(createinvoice);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/createinvoice').then((res: any) => {
    const customer = res.data;
    setInvoiceRowData(customer);
  });
  },[])

  const handleInvoceStatus = (e: any) => {
    const selected = e.target.value;
    setSelectedStatus(selected);
  }
  const updateParentState = () => {
   
    axios.get('http://localhost:8000/createinvoice').then((res: any) => {
      const customer = res.data;
      setInvoiceRowData(customer); 
    });
};


  console.log("invoiceRowData", rowData, invoiceRowData)
  return (
    <div className=''>
      <div className={styles.invoiceFilterWrapperTop}>
        <div className={`${styles.invoiceFilterWrapper} container`}>
          <Row style={{alignItems: "center"}}>
          <Col className={styles.invoice_header} xs={12} md={4}>
            <h5>
                Proforma Invoice
            </h5>
        </Col>
        <Col xs={12} md={8} style ={{display: "flex", justifyContent: "end"}}>
        <div className={styles.invoiceSelectStatus}>
          <Form.Select aria-label="Default select example" value = {selectedStatus} onChange={(e) => handleInvoceStatus(e)}>
            <option value="All">All</option>
            <option value="Generated (Not sent to customer)">Generated (Not sent to customer)</option>
            <option value="Sent to Customer (Due)">Sent to Customer (Due)</option>
            <option value="Part Paid">Part Paid</option>
            <option value="Fully Paid">Fully Paid</option> 
            <option value="Completed">Completed</option> 
            <option value="Canceled">Canceled</option>
          </Form.Select>
        </div>
        <div className={styles.searchForm}>
          <Form.Control
            type="text"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <Button variant="primary" onClick={handleCreateInvoice}>Create Proforma Invoice <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        </div>
      </div>
      
      <ViewInvoice  data = {invoiceRowData} isDelete = {updateParentState} />
    </div>
  )
}

export default ProformaInvoice