import React, { useEffect, useState } from 'react'
import Button from '../../buttons';
import ViewInvoice from '../../../Utilities/ViewInvoice';
import { navigationURL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import styles from "../invoice/invoice.module.css"
import { Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSquarePlus, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import CommonSearch from '../../../Utilities/commonSearch';
import { invoiceSearch, invoiceStatusFilter } from '../../../Utilities/commonSearch/itinerarySearch';
import { _get } from '../../../API/useApi';

const ProformaInvoice = () => {
  const [navigateUrl, setNavigateUrlUrl] = useState("");
  const [invoiceRowData, setInvoiceRowData] = useState([] as any)
  const [rowData, setrowData] = useState([invoiceRowData] as any)
  const [isInvoice, setInvoice] = useState(true)
  const [isAllInvoice, setAllInvoice] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("All" as any)
  const [searchResults, setSearchResults] = useState("");
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
    fetchDataCustomer();
  },[])

  const fetchDataCustomer = async () => {
    const response = await _get('/createinvoice');
    setInvoiceRowData(response?.data);
    setrowData(response?.data)
  }

  const handleInvoceStatus = (e: any) => {
    const selected = e.target.value;
    setSelectedStatus(selected);
    filterData(selected, searchResults)
  }
  const id = ""
  const filterIfPageParamExit = (data: any) => {
    if(id === "" || id === undefined || id === null) {
        return data;
    } else {
        return data?.filter((item: any) => item.global_id === id)
    }
}

  const updateParentState = async() => {
   
    const response = await _get('/createinvoice');
    const invoiceData = filterIfPageParamExit(response.data);
    setInvoiceRowData(invoiceData);
};

const handleSearch = (query: any) => {
  setSearchResults(query) 
  filterData(selectedStatus, query)
};

const filterData = (dropdownValue: any, searchValue: any) => { 
  const results = invoiceRowData.filter((item: any) => {
    const matchesSearch = searchValue ? invoiceSearch(item, searchValue) : true;
    const matchesDropdown = dropdownValue ? invoiceStatusFilter(item, dropdownValue) : true;
    return matchesSearch && matchesDropdown;
  });
  setrowData(results);
}
 
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
            <CommonSearch 
              onSearch={handleSearch} 
              searchResult= {setSearchResults}
            />
        </div>
        <Button variant="primary" onClick={handleCreateInvoice}>Create Proforma Invoice <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        </div>
      </div>
      
      <ViewInvoice  data = {rowData} isDelete = {updateParentState} />
    </div>
  )
}

export default ProformaInvoice