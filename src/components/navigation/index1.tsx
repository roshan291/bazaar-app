import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { helpChild, invoiceChild, itineraryChild, leadsChild, navigationConstant, navigationURL, toolsChild } from "../../constants"
import styles from "./navigation.module.css"
import OutsideClick from "../../Utilities/outsideClick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
    const [selectNav, setSelectNav] = useState('Dashboard' as any)
    const [dashboardActive, setdashboardActive] = useState(true)
    const [leadActive, setleadActive] = useState(false)
    const [itineraryActive, setItineraryActive] = useState(false)
    const [invoiceActive, setInvoiceActive] = useState(false)
    const navigate = useNavigate(); 

    useEffect(() => {
      console.log("test menu...................")
    } ,[])
    
    const handleDashboardActive = () => {
      navigate(dashboard); 
      if (window.location.href.indexOf("/") > -1) {
        setdashboardActive(true); 
      }
      setleadActive(false);
      setInvoiceActive(false);
      setItineraryActive(false);    
    }
    const handleLeadActive = () => {
      console.log("test menu...................")
      if (window.location.href.indexOf("/lead/") > -1) {
        setleadActive(true);
      }
      setdashboardActive(false);
      setInvoiceActive(false);
      setItineraryActive(false);
    }

    const handleItinerary = () => {
      if (window.location.href.indexOf("/itinerary/") > -1) {
        setItineraryActive(true);
      }
      setdashboardActive(false);
      setleadActive(false);
      setInvoiceActive(false);
    }

    const handleInvoice = () => {
      if (window.location.href.indexOf("/invoice") > -1 || window.location.href.indexOf("/customer") > -1) {
        setInvoiceActive(true);
      }
      setleadActive(false);
      setItineraryActive(false);
      setdashboardActive(false);
    }
    
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
    } = navigationURL;
    
    return (
       <>
        
      {/* <div className="desc">
        {boxOutsideClick ? setSelectNav("") : "inside click"}
      </div> */}
       <Navbar className={`${styles.navbarWrapper} bg-body-tertiary`} bg="primary" >
      <Container fluid>
        <Navbar.Brand><Link to={dashboard}>Logo</Link></Navbar.Brand>
        <Nav className={styles.navigationWrapper}>
                <Nav.Link className={dashboardActive ? "activemenu" : "inactivemenu"} onClick={handleDashboardActive}>Dashboard</Nav.Link>
                <NavDropdown title="Lead" className={leadActive ? "activemenu" : "inactivemenu"} >
                    <NavDropdown.Item onClick={handleLeadActive} ><Link to={createLead}>Create new lead</Link></NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLeadActive} >
                        <Link to={manageLead}>Manage leads</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="My Itinerary" className={itineraryActive ? "activemenu" : "inactivemenu"}>
                    <NavDropdown.Item onClick={handleItinerary}><Link to={customisedItinerary}>Customized Itinerary</Link></NavDropdown.Item>
                    <NavDropdown.Item onClick={handleItinerary}><Link to={groupItinerary}>Group Itinerary</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleItinerary}><Link to={readyItinerary}>Ready Itinerary</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Customer & Billing" className={invoiceActive ? "activemenu" : "inactivemenu"}>
                    <Link to={invoice} onClick={handleInvoice}>Invoice</Link>
                    <Link to={proformainvoice} onClick={handleInvoice}>Proforma Invoice</Link>
                    {/* <NavDropdown.Item onClick={handleInvoice}><Link to={invoice}>Invoice</Link></NavDropdown.Item> */}
                    {/* <NavDropdown.Item onClick={handleInvoice}><Link to={proformainvoice}>Proforma Invoice</Link></NavDropdown.Item> */}
                    <NavDropdown.Divider />
                    <Link to={customerView} onClick={handleInvoice}>My Customers</Link>
                    {/* <NavDropdown.Item onClick={handleInvoice}><Link to={customerView}>My Customers</Link></NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link>Hotels</Nav.Link>
                <NavDropdown title="Tools" id="">
                    <NavDropdown.Item>Website Builder</NavDropdown.Item>
                    <NavDropdown.Item>Travel Flyer</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Setup Common Feedback Form</NavDropdown.Item>
                    <NavDropdown.Item>View All Feedback</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Help" id="">
                    <NavDropdown.Item>+91 9727338866</NavDropdown.Item>
                    <NavDropdown.Item>help@holidaybazaar.com</NavDropdown.Item>
                </NavDropdown>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       
       </>
    )
}

export default NavigationBar