import React, { useState } from "react";
import styles from "./navigation.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { navigationURL } from "../../constants";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LOGO from "../../assets/images/logo1.png"

function NavigationBar() {

const navigate = useNavigate(); 

  const [activeMenu, setActiveMenu] = useState("home" as any);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  const [isActiveLeadSubItem, setIsActiveLeadSubItem] = useState("");
  const [isActiveItinerarySubItem, setIsActiveItinerarySubItem] = useState("");
  const [isActiveBillingSubItem, setIsActiveBillingSubItem] = useState("");
  
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menuName: any) => {
    setActiveMenu(menuName);
  
    setIsSubMenuOpen(false)
    setIsSubMenuOpen1(false)
    setIsSubMenuOpen2(false)
    if(menuName !== "lead") {
        setIsActiveLeadSubItem("");
    }
    if(menuName !== "billing") {
        setIsActiveBillingSubItem("");
    }
    if(menuName !== "itinerary") {
        setIsActiveItinerarySubItem("")
    }
    if (activeMenu === menuName) {
        if(menuName === "lead") {
            setIsSubMenuOpen(true)
        } else if(menuName === "itinerary") {
            setIsSubMenuOpen1(true)        
        } else if(menuName === "billing"){
            setIsSubMenuOpen2(true)
        }
        
        // setIsSubMenuOpen(false)
      setActiveMenu(null); // Close the menu if it's already active
    } else {
        
      setActiveMenu(menuName); // Set the active menu
    }
  };

  const handleSubMenuClick = () => {
    // setActiveMenu(null);
    setIsSubMenuOpen(true)
    setIsSubMenuOpen1(true)
    setIsSubMenuOpen2(true)
  };

 

const navigateToHome = () => {
    navigate(dashboard);
}
const handleLeadNavigation = (page: any) => {
    if(page === "Create new lead") {
        navigate(createLead);
    } else {
        navigate(manageLead);
    }
}

const handleItineraryNavigation = (page: any) => {
    if(page === "Customized Itinerary") {
        navigate(customisedItinerary);
    } else if(page === "Group Itinerary") {
        navigate(groupItinerary);
    } else {
        navigate(readyItinerary);
    }
}

const handleBillingNavigation = (page: any) => {
    if(page === "Invoice") {
        navigate(invoice);
    } else if(page === "Proforma Invoice") {
      navigate(proformainvoice);
    } else {
      navigate(customerView);
    }
}

const clearpageStorate = () => {
  localStorage.setItem("page", "All");
}

const clearInvpocepageStorate = () => {
  localStorage.setItem("invoice_page", "All");
}


  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      
      
      <div className={styles.navleftwrapper}>
      <div className="logo" onClick={navigateToHome}>
        <img src= {LOGO} alt = "logo" />
      </div>
      <ul className="nav-menu">
        <li
          className={`nav-item ${activeMenu === "home" ? "active" : ""}`}
          onClick={() => {
            handleMenuClick("home")
            navigateToHome();
        }}
        >
          <a  className="nav-link">
          Dashboard            
          </a>
        </li>
        <li
          className={`nav-item ${activeMenu === "lead" || isSubMenuOpen ? "active" : ""}`}
          onClick={() => handleMenuClick("lead")}
        >
            
          <a  className="nav-link">
            Lead { activeMenu === "lead" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />  }
          </a>
          <ul className={`sub-menu ${activeMenu === "lead" ? "open" : ""}`}>
            {
                ["Create new lead", "Manage leads"].map((subItem: any, index: any) => <li key = {index} className={`sub-link ${isActiveLeadSubItem === subItem ? "subMenuActive" : ""}`} 
                onClick={() => {
                    setIsActiveLeadSubItem(subItem);
                    handleSubMenuClick();
                    handleLeadNavigation(subItem);
                    clearpageStorate()
                }}
                >
                    {subItem}
                </li>)
            }
          </ul>
        </li>
        <li
          className={`nav-item ${activeMenu === "itinerary" || isSubMenuOpen1 ? "active" : ""}`}
          onClick={() => handleMenuClick("itinerary")}
        >
          <a  className="nav-link">
          My Itinerary  { activeMenu === "itinerary" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} /> }
          </a>
          <ul className={`sub-menu ${activeMenu === "itinerary" ? "open" : ""}`}>
            {
                ["Customized Itinerary", "Group Itinerary", " Ready Itinerary" ].map((subItem: any, index: any) => <li key ={index} className={`sub-link ${isActiveItinerarySubItem === subItem ? "subMenuActive" : ""}`} onClick={() => {
                    setIsActiveItinerarySubItem(subItem);
                    handleSubMenuClick();
                    handleItineraryNavigation(subItem);
                }}> {subItem}
                </li>)
            }
             
          </ul>
        </li>
         <li
          className={`nav-item ${activeMenu === "billing" || isSubMenuOpen2 ? "active" : ""}`}
          onClick={() => handleMenuClick("billing")}
        >
          <a className="nav-link">
          Customer & Billing { activeMenu === "billing" ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} /> }
          </a>
          <ul className={`sub-menu ${activeMenu === "billing" ? "open" : ""}`}>
            {
                ["Invoice", "Proforma Invoice","My Customers"].map((subItem: any, index: any) => <li key = {index} className={`sub-link ${isActiveBillingSubItem === subItem ? "subMenuActive" : ""}`} 
                onClick={() => {
                    setIsActiveBillingSubItem(subItem);
                    handleSubMenuClick();
                    handleBillingNavigation(subItem);
                    clearInvpocepageStorate();
                }}
                >
                    {subItem}
                </li>)
            }
          </ul>
        </li>
        <li
          className={`nav-item disabled ${activeMenu === "tools" ? "active" : ""}`}
          onClick={() => handleMenuClick("tools")}
        >
          <a className="nav-link">
          Tools
          </a>
        </li>
        <li
          className={`nav-item disabled ${activeMenu === "help" ? "active" : ""}`}
          onClick={() => handleMenuClick("help")}
        >
          <a  className="nav-link">
          Help
          </a>
        </li>
      </ul>
        </div>
        
     
      <div className="login-buttons">
        <a  className="btn login">
          Login
        </a>
         
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default NavigationBar;
