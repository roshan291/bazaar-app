import React, {useEffect, useState} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants';
import ViewInvoice from '../../../Utilities/ViewInvoice';
import styles from "./invoice.module.css"
import Button from '../../buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSquarePlus, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Form, Row } from 'react-bootstrap';
import CommonSearch from '../../../Utilities/commonSearch';
import { invoiceSearch, invoiceStatusFilter } from '../../../Utilities/commonSearch/itinerarySearch';
const Invoice = () => {
  const [navigateUrl, setNavigateUrlUrl] = useState("");
  const [invoiceRowData, setInvoiceRowData] = useState([] as any)
  const [rowData, setrowData] = useState(invoiceRowData as any)
  const [isInvoice, setInvoice] = useState(true)
  const [isDeleted, setDeleted] = useState(false)
  const [isAllInvoice, setAllInvoice] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("All" as any)
  const [searchResults, setSearchResults] = useState("");

  const navigate = useNavigate(); 

  const { id } = useParams();

  console.log(" Invoice id", id)
  
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
    navigate(`${createinvoice}/${id}`);
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
    localStorage.removeItem("invoice_page");
  }
}



const handleStatusClick = (selectedItem: any) => {
  setSelectedStatus(selectedItem)
  filterData(selectedItem, searchResults)
}
  
let currentSelectedFilter : any;
  if (typeof(Storage) !== "undefined") {
    currentSelectedFilter = localStorage.getItem("invoice_page");
  }
  useEffect(() => { 
    setSelectedStatus(currentSelectedFilter)
    console.log("currentSelectedFilter", currentSelectedFilter)
    handleStatusClick(currentSelectedFilter);
  }, [currentSelectedFilter, invoiceRowData])

  const handleSearch = (query: any) => {
    setSearchResults(query) 
    filterData(selectedStatus, query)
  };
  
  const filterData = (dropdownValue: any, searchValue: any) => {
    console.log("dropdownValue", dropdownValue,  "searchValue", searchValue);
    const results = invoiceRowData.filter((item: any) => {
      const matchesSearch = searchValue ? invoiceSearch(item, searchValue) : true;
      const matchesDropdown = dropdownValue ? invoiceStatusFilter(item, dropdownValue) : true;
      return matchesSearch && matchesDropdown;
    });
    setrowData(results);
  }

  return (
    <>
    <div className={styles.invoiceFilterWrapperTop}>
      <div className={`${styles.invoice_header} container`}>
      <Row style={{alignItems: "center"}}>
          <Col className={styles.invoice_header} xs={12} md={4}>
            <h5>
               Invoice
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
            <CommonSearch 
              onSearch={handleSearch} 
              searchResult= {setSearchResults}
            />
        </div>
        <Button variant="primary" onClick={handleCreateInvoice}>Create Invoice <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        
        
      </div>
       
      </div>
      <ViewInvoice  data = {rowData} isDelete = {updateParentState} />
      </>
  )
}

export default Invoice