import React, {useEffect, useState} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants';
import ViewInvoice from '../../../Utilities/ViewInvoice';
import styles from "./invoice.module.css"
import Button from '../../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
const Invoice = () => {
  const [navigateUrl, setNavigateUrlUrl] = useState("");
  const [invoiceRowData, setInvoiceRowData] = useState([] as any)
  const [rowData, setrowData] = useState(invoiceRowData as any)
  const [isInvoice, setInvoice] = useState(true)
  const [isDeleted, setDeleted] = useState(false)
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
    setrowData(customer);
  });
  },[])

  
  // useEffect(() => {
  //   axios.get('http://localhost:8000/createinvoice').then((res: any) => {
  //     const customer = res.data;
  //     setInvoiceRowData(customer);
  //     console.log("_____________________________________",isDeleted)
  //   });
  // },[isDeleted])

  const updateParentState = () => {
   
    axios.get('http://localhost:8000/createinvoice').then((res: any) => {
      const customer = res.data;
      setInvoiceRowData(customer); 
    });
};

const handleInvoceStatus = (e: any) => {
  
  const selected = e.target.value;
  console.log("handleInvoceStatus", selected);
  setSelectedStatus(selected);
  handleStatusClick(selected);
  if (typeof(Storage) !== "undefined") {
    localStorage.removeItem("page");
  }
}



const handleStatusClick = (selectedItem: any) => {
  setSelectedStatus(selectedItem)
  if(selectedItem === "All" || selectedItem === "" || !selectedItem ) {
    setrowData(invoiceRowData);
  } else {
    const filteredData = invoiceRowData?.filter((item: any) => item.invoieStatus === selectedItem )
    console.log("invoiceRowData", invoiceRowData, selectedItem, filteredData)
    setrowData(filteredData)
  }
}
  
let currentSelectedFilter : any;
  if (typeof(Storage) !== "undefined") {
    currentSelectedFilter = localStorage.getItem("page");
  }
  useEffect(() => { 
    setSelectedStatus(currentSelectedFilter)
    console.log("currentSelectedFilter", currentSelectedFilter)
    handleStatusClick(currentSelectedFilter);
  }, [currentSelectedFilter, invoiceRowData])

  return (
    <div className='manage_top_view'>
      <div className={`${styles.invoice_header} container`}>
        <h5>
        Invoice
        </h5>
        {/* {isDeleted && <p>Invoice has been marked for deletion.</p>} */}
        
      </div>
       
      <div className={styles.invoiceFilterWrapperTop}>
        <div className={`${styles.invoiceFilterWrapper} container`}>
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
        <Button variant="primary" onClick={handleCreateInvoice}>Create Invoice
        </Button>
        </div>
      </div>
      <ViewInvoice  data = {rowData} isDelete = {updateParentState} />
    </div>
  )
}

export default Invoice