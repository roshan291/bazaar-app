import React, {useState, useEffect} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { itineraryStatus, navigationURL } from '../../../constants'
import DisplayTable from '../../../pages/itinerary/displayTable'
import axios from 'axios'
import { Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../buttons'
import CommonSearch from '../../../Utilities/commonSearch'
import { itinerarySearch, itineraryStatusFilter } from '../../../Utilities/commonSearch/itinerarySearch'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { SetSessionStorageWithoutExcryption } from '../../../Utilities/storages/sessionStorate'

const ReadyItinerary = () => {
    const { id } = useParams();
    const [navigateUrl, setNavigateUrlUrl] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("All" as any)
    const [rowdata,setRowData] = useState([] as any)
    const [data, setData] = useState([])
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
    // This runs when the component mounts and when the route changes
    return () => {
      SetSessionStorageWithoutExcryption("previouspage", location.pathname);
    };
}, []);

  useEffect(() => {
       
        axios.get('http://localhost:8000/createitinerary').then((res: any) => {
          const customer = res.data;
          setData(customer);
          setRowData(customer)
 
        });
  },[])

  useEffect(() => {
    if(id === "" || id === undefined || id === null) {
    } else {
      axios.get('http://localhost:8000/createitinerary').then((res: any) => {
        const customer = res?.data?.filter((item: any) => Number(item.global_id) === Number(id));
 
        setData(customer);
        setRowData(customer)
      });
    }
  }, [id]);

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

  return (
    <>
      <div className="page_top_banner">
        <div className={`container`}>
          <Row style={{alignItems: "center"}}>
          <Col className="top_banner_left_panel" xs={12} md={4}>
            <h5>
              Ready Itinerary
            </h5>
        </Col>
        <Col className="top_banner_right_panel" xs={12} md={8} style ={{display: "flex", justifyContent: "end"}}>
        <div className="top_banner_dropdown">
          <Form.Select aria-label="Default select example" value = {selectedStatus} onChange={(e) => handleSelectedStatus(e)}>
            <option value="All">All</option>
            {
              itineraryStatus?.map((list: any) => <option value={list}>{list}</option>)
            }
          </Form.Select>
        </div>
        <div className="top_banner_searchForm">
          {/* <Form.Control
            type="text"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          <CommonSearch 
            onSearch={handleSearch} 
            searchResult= {setSearchResults}
          />
        </div>
        <Button variant="primary" onClick={handleNavigation}>Create Ready Itinerary <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        </div>
      </div>
  
      <DisplayTable rowData = {rowdata}/>
    </>
  )
}

export default ReadyItinerary