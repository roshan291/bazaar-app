import React, {useState, useEffect} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants'
import DisplayTable from '../../../pages/itinerary/displayTable'
import axios from 'axios'
import { Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../../buttons'

const ReadyItinerary = () => {
    const [navigateUrl, setNavigateUrlUrl] = useState("")
    const [selectedStatus, setSelectedStatus] = useState("All" as any)
    const [data, setData] = useState([])
    const handleNavigation = () => {
        setNavigateUrlUrl(navigationURL.createItinerary)
    }
    
    useEffect(() => {
      axios.get('http://localhost:8000/createitinerary').then((res: any) => {
      const customer = res.data;
      setData(customer);
    });
  },[])

  const handleSelectedStatus = (e: any) => {
    setSelectedStatus(e.target.value)
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
            <option value="Generated (Not sent to customer)">Generated (Not sent to customer)</option>
            <option value="Sent to Customer (Due)">Sent to Customer (Due)</option>
            <option value="Part Paid">Part Paid</option>
            <option value="Fully Paid">Fully Paid</option> 
            <option value="Completed">Completed</option> 
            <option value="Canceled">Canceled</option>
          </Form.Select>
        </div>
        <div className="top_banner_searchForm">
          <Form.Control
            type="text"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <Button variant="primary" onClick={handleNavigation}>Create Ready Itinerary <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        </div>
      </div>
  
    <DisplayTable rowData = {data}/>
    </>
  )
}

export default ReadyItinerary