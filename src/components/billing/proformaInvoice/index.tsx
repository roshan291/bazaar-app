import React, { useEffect, useState } from 'react'
import Button from '../../buttons';
import ViewInvoice from '../../../Utilities/ViewInvoice';
import axios from 'axios';
import { navigationURL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import styles from "../invoice/invoice.module.css"

const ProformaInvoice = () => {
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
        Proforma Invoice
        </h5>
        
        <Button variant="primary" onClick={handleCreateInvoice}>Create Proforma Invoice
        </Button>
      </div>
       
      
      <ViewInvoice  data = {invoiceRowData} />
    </div>
  )
}

export default ProformaInvoice