import React, {useEffect, useState} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants';
import ViewInvoice from '../../../Utilities/ViewInvoice';
import styles from "./invoice.module.css"
import Button from '../../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Invoice = () => {
  const [navigateUrl, setNavigateUrlUrl] = useState("");
  const [invoiceRowData, setInvoiceRowData] = useState([] as any)
  const [rowData, setrowData] = useState([invoiceRowData] as any)
  const [isInvoice, setInvoice] = useState(true)
  const [isAllInvoice, setAllInvoice] = useState(false)
  
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

  console.log("invoiceRowData", rowData, invoiceRowData)
  
  return (
    <div className='manage_top_view container'>
      <div className={styles.invoice_header}>
        <h5>
        Invoice
        </h5>
        
        <Button variant="primary" onClick={handleCreateInvoice}>Create Invoice
        </Button>
      </div>
       
      
      <ViewInvoice  data = {invoiceRowData} />
    </div>
  )
}

export default Invoice