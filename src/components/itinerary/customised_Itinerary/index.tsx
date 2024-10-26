import React, { useEffect, useState } from 'react'
import DisplayTable from '../../../pages/itinerary/displayTable'
import { Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../buttons'
import { itineraryStatus, navigationURL } from '../../../constants'
import { itinerarySearch, itineraryStatusFilter } from '../../../Utilities/commonSearch/itinerarySearch'
import CommonSearch from '../../../Utilities/commonSearch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SetSessionStorageWithoutExcryption } from '../../../Utilities/storages/sessionStorate'
import { _get } from '../../../API/useApi'

const CustomisedItinerary = () => {
  const [selectedStatus, setSelectedStatus] = useState("All" as any);
  const [navigateUrl, setNavigateUrlUrl] = useState("")
  const [data, setData] = useState([])
  const [rowdata,setRowData] = useState([] as any)
  const [searchResults, setSearchResults] = useState("");
  const navigate = useNavigate(); 
  const location = useLocation();
  
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
    createItinerary,
  } = navigationURL;

  const handleNavigation = () => {
      navigate(`${createItinerary}`);
  }

  const handleSearch = (query: any) => {
    setSearchResults(query) 
    filterData(selectedStatus, query)
  };

  useEffect(() => {
    fetchDataCustomer();
  },[])

  const fetchDataCustomer = async () => {
    const response = await _get('/createitinerary');
    setData(response?.data);
    setRowData(response?.data)
  }

  const handleSelectedStatus = (e: any) => {
    setSelectedStatus(e.target.value) 
    filterData(e.target.value, searchResults)
  }
  
  const filterData = (dropdownValue: any, searchValue: any) => { 
    const results = data.filter((item: any) => {
      const matchesSearch = searchValue ? itinerarySearch(item, searchValue) : true;
      const matchesDropdown = dropdownValue ? itineraryStatusFilter(item, dropdownValue) : true;
      return matchesSearch && matchesDropdown;
    });
    setRowData(results);
  }


  useEffect(() => {
    // This runs when the component mounts and when the route changes
    return () => {
      SetSessionStorageWithoutExcryption("previouspage", location.pathname);
    };
}, []);

  return (
    <>
      <div className="page_top_banner">
        <div className={`container`}>
          <Row style={{alignItems: "center"}}>
          <Col className="top_banner_left_panel" xs={12} md={4}>
            <h5>
            Customised Itinerary
            </h5>
        </Col>
        <Col className="top_banner_right_panel" xs={12} md={8} style ={{display: "flex", justifyContent: "end"}}>
        <div className="top_banner_dropdown">
          <Form.Select aria-label="Default select example" value = {selectedStatus} onChange={(e) => handleSelectedStatus(e)}>
            <option value="All">All</option>
            {
              itineraryStatus?.map((list: any, index: any) => <option key = {index} value={list}>{list}</option>)
            }
          </Form.Select>
        </div>
        <div className="top_banner_searchForm">
          <CommonSearch 
            onSearch={handleSearch} 
            searchResult= {setSearchResults}
          />
        </div>
        <Button variant="primary" onClick={handleNavigation}>Create Customised Itinerary <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        </div>
      </div>
  
    <DisplayTable rowData = {rowdata}/>
    </>
    
  )
}

export default CustomisedItinerary 