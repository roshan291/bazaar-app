import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./manage.module.css"
import { leadStatus, manageLeadSideNavMoreList, navigationURL, notApplicable } from '../../../constants';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { leadMockData } from '../../../constants/mocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faAngleUp, faXmark, faExpand, faAngleDown, faCheck, faMinimize, faMaximize, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import ManageLeadSideNavMore from '../../../Utilities/ManageLeadSideNavMore';
import UpdateLeadStatus from '../../../Utilities/UpdateLeadStatus';
import Collapse from 'react-bootstrap/Collapse';
import { Link, useNavigate } from 'react-router-dom';
import { NoDataFound } from '../../../pages/NoDataFound';
import { dateDifference, dateFormat } from '../../../Utilities/Utils';
import CommonSearch from '../../../Utilities/commonSearch';
import { itineraryStatusFilter, leadSearch, leadStatusFilter } from '../../../Utilities/commonSearch/itinerarySearch';
import { _get } from '../../../API/useApi';

const ManageLead = () => {

  const navigate = useNavigate(); 
  
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [selectedNavItem, setselectedNavItem] = useState<string>("");
  const [selectedId, setselectedId] = useState<string>("");
  const [activeSideViewOfLead, setActiveSideViewOfLead] = useState(false);
  const [activeFullViewOfLead, setActiveFullViewOfLead] = useState(false);
  const [showSingleView, setshowSingleView] = useState({} as any);
  const [activeForMenu, setActiveForMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [manageLeadSideNavMoreModalShow, setmanageLeadSideNavMoreModalShow] = useState(false);
  const [managedleadDefaultViewMore, setmanagedleadDefaultViewMore] = useState(false);
  const [leadData, setLeadData] = useState([] as any)
  const [leadDataRow, setLeadDataRow] = useState([] as any)
  const [chnageLeadStatusModalshow, setChnageLeadStatusModalShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [itineraryCount, setitineraryCount] = useState("");
  const [globalId, setGlobalId] =  useState("" as any)

  useEffect(() => {
    fetchDataCustomer()
    // axios.get("http://localhost:8000/createlead").then((response: any) => setLeadData(response?.data))
  }, [])

  useEffect(() => {
    fetchDataCustomer()
    // axios.get("http://localhost:8000/createlead").then((response: any) => setLeadData(response?.data))
  }, [chnageLeadStatusModalshow])

  const fetchDataCustomer = async () => {
    const response = await _get('/createlead');
    setLeadData(response?.data);
  }



  const handleLeadStatusChangeClose = () => {
    setChnageLeadStatusModalShow(false)
    setActiveSideViewOfLead(false)
    setActiveForMenu(false) 
  };
  
  const handleLeadStatusChangeShow = (title: any, id: any) => {
    setChnageLeadStatusModalShow(true)
    setActiveSideViewOfLead(false)
    setActiveForMenu(false) 
    setselectedNavItem(title)
    setselectedId(id)
  };


  const handleLeadClick = (itemIndex: any, item: any) => {
    setSelectedIndex(itemIndex); 
    setshowSingleView(item);
    setActiveSideViewOfLead(true)

  };

  const handleFilterItems = (status: any) => {
   
  }

  const handleStatusClick = (e: any) => {
    const status = e.target.value;
    setActiveStatus(status)
    if(status === "All") { 
      setLeadDataRow(leadData);
    } else {
      
      filterData(status, searchResults)
    }
    setActiveSideViewOfLead(false)
    setActiveForMenu(false)
    setmanagedleadDefaultViewMore(false)
   
  };
  let currentSelectedFilter : any;
  if (typeof(Storage) !== "undefined") {
    currentSelectedFilter = localStorage.getItem("page");
  }
  useEffect(() => {
     setActiveStatus(currentSelectedFilter)
    filterData(currentSelectedFilter, searchResults)
  }, [currentSelectedFilter, leadData])

  useEffect(() => {
    if(activeStatus === "All") { 
      setLeadDataRow(leadData);
    }
  }, [activeStatus, leadData])

  


  const handleCloseButton = () => {
    setActiveSideViewOfLead(false)
 
    // setActiveFullViewOfLead(!activeFullViewOfLead)
    // activeFullViewOfLead ? setActiveSideViewOfLead(false) : setActiveSideViewOfLead(true)
  }

   

  const handleViewMore = () => {
 
    setmanagedleadDefaultViewMore(true)
  }

  const handleHideViewMore = () => {
    setmanagedleadDefaultViewMore(false)
  }

  const handleOpenModalForMenu = () => {
    setActiveForMenu(!activeForMenu)
    setmanageLeadSideNavMoreModalShow(true)
  }

  const handleExpandFullScreenView = () => {
    setActiveFullViewOfLead(!activeFullViewOfLead)
  }

  const {
    createLead,
    updateLead,
    invoice,
    readyItinerary,
    createItinerary,
} = navigationURL;

const handleSearch = (query: any) => {
  setSearchResults(query) 
  filterData(activeStatus, query)
};

const filterData = (dropdownValue: any, searchValue: any) => {
 
  const results = leadData.filter((item: any) => {
    const matchesSearch = searchValue ? leadSearch(item, searchValue) : true;
    const matchesDropdown = dropdownValue ? leadStatusFilter(item, dropdownValue) : true;
    return matchesSearch && matchesDropdown;
  });
  setLeadDataRow(results);
}


const handleLeadsMoreList = (listItem: any, id: any, globalID: any) => {
    if(listItem?.navTitle === "Change Lead Status" || listItem?.navTitle === "Remove Lead" ) {
    handleLeadStatusChangeShow(listItem, id)
  } 
  if(listItem?.navTitle === "Edit Lead") {
    navigate(`${updateLead}/${id}`);
  }
  if(listItem?.navTitle === "Invoices") {
    navigate(`${invoice}/${globalID}`);
  }
  if(listItem?.navTitle === "Add New Itinerary") {
    navigate(`${createItinerary}/${globalID}`);
  }
  if(listItem?.navTitle === "View Itinerary") {
    navigate(`${readyItinerary}/${globalID}`);
  }
}

const fetchItinerayData = async() => {
  const response = await _get('/createitinerary');
  const itineraryData = response?.data?.filter((item: any) => item.global_id === "17167").length;  
  setitineraryCount(itineraryData)
}
useEffect(() => {
  fetchItinerayData();
  // axios.get('http://localhost:8000/createitinerary').then((res: any) => {
  //   const itineraryData = res?.data?.filter((item: any) => item.global_id === "17167").length;
    
  //   setitineraryCount(itineraryData)
  // })
},[])


const getItineraryCount = () => {
  return itineraryCount;
}
const getInvoiceCount = () => {
  return 1;
}
  return (
    <>
    {/* <ManageLeadSideNavMore show={manageLeadSideNavMoreModalShow} onHide={() => {
      setmanageLeadSideNavMoreModalShow(false)
      setActiveForMenu(false)
      }} /> */}
      <UpdateLeadStatus closeModal = {setChnageLeadStatusModalShow} show = {chnageLeadStatusModalshow} onHide = {handleLeadStatusChangeClose} selectedItem = {selectedNavItem} id = {selectedId} />
      <div className="page_top_banner">
        <div className={`container`}>
          <Row style={{alignItems: "center"}}>
          <Col className="top_banner_left_panel" xs={12} md={3}>
            <h5>
              Manage lead
            </h5>
        </Col>
        <Col className="top_banner_right_panel" xs={12} md={9} style ={{display: "flex", justifyContent: "end"}}>
        <div className="top_banner_dropdown">
          <Form.Select aria-label="Default select example" value = {activeStatus} onChange={(e) => handleStatusClick(e)}>
            {
              leadStatus?.map((list: any) => <option value={list}>{list}</option>)
            }
          </Form.Select>
        </div>
        <div className="top_banner_searchForm">
          <CommonSearch 
            onSearch={handleSearch} 
            searchResult= {setSearchResults}
          />
        </div>
        <Button variant="primary" onClick={() => navigate(createLead)}>New Lead <FontAwesomeIcon icon={faSquarePlus} />
        </Button>
        </Col>
        </Row>
        </div>
      </div>
    <Container fluid className={`${styles.managelead_wrapper} manage_top_view`}>
      {/* <Container>
        <Row className='align-items-center justify-content-between'> 
          <Col xs lg="9">
            <ul>
              {
                leadStatus?.map((status: any) => <li
                  key={status}
                  className={activeStatus === status ? styles.active : ''} 
                  onClick={() => handleStatusClick(status)}
                >{status} </li>)
              }
            </ul>
          </Col>
          <Col xs lg="1"></Col>
          <Col xs lg="2" className={styles.managelead_createLead}> 
             <Button variant="primary" type="button" onClick={() => navigate(createLead)}>
                New Lead <FontAwesomeIcon icon={faSquarePlus} />
              </Button>
            
          </Col>
        </Row>
      </Container> */}
    </Container>
    {/* <Container fluid className={styles.managelead_selectFilter}>
      <Container>
        <Row className="align-items-center">
          <Col><h5>{activeStatus} Leads</h5></Col>
          <Col xs lg="3">
          <Form className={styles.searchForm}>
            <CommonSearch 
              onSearch={handleSearch} 
              searchResult= {setSearchResults}
            />
           </Form>
        </Col>
        </Row>
      </Container>
    </Container> */}
    <Container fluid>
      <Container className={styles.managelead_items_wrapper}>
        { activeFullViewOfLead ? <></> : <div className={`${styles.managelead_main_left} ${activeSideViewOfLead ? styles.managelead_main_left_dynamic : ""}`}>
        {
          leadDataRow?.map((item: any, index: any) => <div className={`${styles.managelead_content_wrapper} align-items-end ${selectedIndex === index ? styles.manageLeadActive : ""}`} key ={index} onClick={() => {
            handleLeadClick(index, item);
            setGlobalId(item?.global_id);
            }}>
            <div className={`${styles.managelead_item_left} ${activeSideViewOfLead ? styles.sideViewEnabled : styles.fullwidthViewEnabled}`}>
              <h6>{item?.id} - {item?.leadTitle} {item?.leadstatus} - {item?.global_id}</h6>
              <ul>
                {
                  activeSideViewOfLead ? <>
                  <li><label>Destination</label>
                    {item?.destination !== "" ? item?.destination : notApplicable}
                  </li>
                  <li><label>Budget/Cost</label>
                    INR {item?.budgetForTrip !== "" ? item?.budgetForTrip : notApplicable}
                  </li>
                  <li><label>Itinerary</label>
                    {getItineraryCount()}
                  </li>
                  </> : <>
                  <li>
                  <label>Requirements</label>
                    {item?.getRequirement}
                  </li>
                  <li><label>Destination</label>
                  {item?.destination !== "" ? item?.destination : notApplicable}
                  </li>
                  <li><label>Adults</label>
                    {item?.noOfAdults !== "" ? item?.noOfAdults : notApplicable}
                  </li>
                  <li><label>Kids</label>
                    {item?.noOfKids !== "" ? item?.noOfKids : notApplicable}
                  </li>
                  <li><label>Infants</label>
                    {item?.noOfInfants !== "" ? item?.noOfInfants : notApplicable}
                  </li>
                  <li><label>Budget/Cost</label>
                    INR {item?.budgetForTrip !== "" ? item?.budgetForTrip : notApplicable}
                  </li>
                  <li><label>Itinerary</label>
                    {getItineraryCount()}
                  </li>
                  </>
                }
                
              </ul>
            </div>
            {
              activeSideViewOfLead? <></> : <div className={styles.managelead_item_right}>
                <label><span>Travelling on</span> {dateFormat(item?.startDate)} | <span>New Since</span> {dateDifference(item?.createdDate)}</label>
                <label><span>Managed By</span> {item?.customerName} | {item?.createdDate}</label>
              </div>
            }         
          </div>) 
        }    
        {
          !leadDataRow?.length ? <NoDataFound /> : null
        }
        </div>}  
        {activeSideViewOfLead ? <div className={styles.managelead_main_right}>
          <Row className='align-items-center'>
            <Col xs lg="6"><h4>{showSingleView["leadTitle"]}</h4></Col>
            <Col xs lg="6" style = {{textAlign: "right"}} className={styles.managelead_sideview_nav}><span onClick={() => handleOpenModalForMenu()}>MENU { activeForMenu ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />} </span> <span onClick={() => handleExpandFullScreenView()}> { activeFullViewOfLead ? <FontAwesomeIcon icon={faMinimize} /> : <FontAwesomeIcon icon={faMaximize} />}  </span>{!activeFullViewOfLead ? <span onClick={() => handleCloseButton()}> <FontAwesomeIcon icon={faXmark} /></span> : <></>}</Col>
          </Row>
          <Row className={`align-items-center ${styles.managelead_sideview_info}`}>
            <Col xs lg="6"><label><span>For</span> {showSingleView["typeOfHoliday"]} | <span>Travelling</span> {dateFormat(showSingleView["startDate"])} | <span>New Since</span> {dateDifference(showSingleView?.createdDate)}</label></Col>
            <Col xs lg="6" style = {{textAlign: "right"}}><label><span>Manage by</span> {showSingleView["customerName"]}</label></Col>
          </Row>
           
          <Collapse in={activeForMenu}>
              <Container>
                <Row className={styles.manageSideNavModal}>
                {
                    manageLeadSideNavMoreList?.map((navList: any, index: any) => 
                    <Col xs={6} md={4} key = {index}>
                        {
                          <h6 onClick={()=>handleLeadsMoreList(navList, showSingleView["id"], showSingleView["global_id"])}><span>{navList.icon} &nbsp;</span>{navList?.navTitle}</h6> 
                        }
                        {/* { navList?.navTitle === "Change Lead Status" ? <h6 
                          onClick = {() => handleLeadStatusChangeShow(navList?.navTitle, showSingleView["id"])}>
                          <span>{navList.icon} &nbsp;</span>{navList?.navTitle}
                        </h6> : navList?.navTitle === "Remove Lead" ? <h6 
                          onClick = {() => handleLeadStatusChangeShow(navList?.navTitle, showSingleView["id"])}>
                          <span>{navList.icon} &nbsp;</span>{navList?.navTitle}
                        </h6>  } */}
                    </Col> )
                }
                </Row> 
              </Container>
          </Collapse>

          <Row className={styles.selectedListContent}>
              { managedleadDefaultViewMore ? <></> : <Col xs={12} md={12}>
                <ul>
                  <li><span>Destination</span> {showSingleView?.destination}</li>
                  <li><span>Adults</span>{showSingleView?.noOfAdults}</li>
                  <li><span>Kids</span>{!!showSingleView?.noOfKids ? showSingleView?.noOfKids : "-"}</li>
                  <li><span>Infants</span>{!!showSingleView?.noOfDays ? showSingleView?.noOfDays : "-"}</li>
                  <li><span>Budge / Cost</span>{showSingleView?.budgetForTrip} /-</li>
                  <li><span>Itinerary</span>{getItineraryCount()}</li>
                  <li onClick={() => handleViewMore()} style={{cursor: "pointer"}}>More <FontAwesomeIcon icon={faAngleDown} /></li>
                </ul>
              </Col>}
              {
                managedleadDefaultViewMore ? <> 
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Customer first name</span> {!!showSingleView?.customerName ? showSingleView?.customerName : "-"}
                </Col>
                {/* <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Customer first name</span> {!!showSingleView?.noOfKids ? showSingleView?.noOfKids : "-"}
                </Col> */}
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Email</span> {!!showSingleView?.noOfKids ? showSingleView?.noOfKids : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Mobile</span> {!!showSingleView?.noOfKids ? showSingleView?.noOfKids : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Country</span> {!!showSingleView?.noOfKids ? showSingleView?.noOfKids : "-"}
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Requirement</span> {!!showSingleView?.getRequirement ? showSingleView?.getRequirement : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Adults</span> {!!showSingleView?.noOfAdults ? showSingleView?.noOfAdults : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Kinds(2 to 12 years)</span> {!!showSingleView?.noOfKids ? showSingleView?.noOfKids : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Infants</span> {!!showSingleView?.noOfInfants ? showSingleView?.noOfInfants : "-"}
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Destination</span> {!!showSingleView?.destination ? showSingleView?.destination : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Start Date</span> {!!showSingleView?.startDate ? dateFormat(showSingleView?.startDate) : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>End Date</span> {!!showSingleView?.endDate ? dateFormat(showSingleView?.endDate) : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Hotel Preference</span> {!!showSingleView?.hotelPreferences ? showSingleView?.hotelPreferences : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Budget / Cost</span> {!!showSingleView?.budgetForTrip ? showSingleView?.budgetForTrip : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Payment Mode</span> {!!showSingleView?.paymentmode ? showSingleView?.paymentmode : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Currency</span> {!!showSingleView?.currencyType ? showSingleView?.currencyType : "-"}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Itenerary</span> {getItineraryCount()}
                </Col>
                <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Invoce</span> {getInvoiceCount()}
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <span>Short Note</span> {!!showSingleView?.shortNote ? showSingleView?.shortNote : "-"}
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <br />
                  <span>Service included in the price</span>
                </Col>
                <Col xs={12} md={12} className={`${styles.defaultViewItems} mb-2`}>
                  <Row className={styles.serviceIncludeWrapper}>
                    {
                      showSingleView?.serviceList.filter((item: any) => item.isChecked).map((list: any) => <Col xs={6} md={4} className={`${styles.defaultViewItems} mb-2`}>
                        <FontAwesomeIcon icon={faCheck} /> {list?.serviceName}
                      </Col> )
                    }
                  </Row>
                </Col>
                </> : null
              }
              
              
              {/* <ul>
                <li>Customer first name<span></span></li>
                <li>Customer last name<span></span></li>
                <li>Email<span></span></li>
                <li>Mobile<span></span></li>
                <li>Country<span></span></li>
              </ul>
              <ul>
                <li>Requirement<span></span></li>
              </ul>
              <ul>
                <li>Adults<span></span></li>
                <li>Kinds(2 to 12 years)<span></span></li>
              </ul>
              <ul>
                <li>Destination<span></span></li>
              </ul>
              <ul>
                <li>Start Date<span></span></li>
                <li>End Date<span></span></li>
                <li>Hotel Preference<span></span></li>
                <li>Budget / Cost<span></span></li>
                <li>Amount<span></span></li>
                <li>Currency<span></span></li>
              </ul>
              <h5>Service included in the price</h5>
              <ul>
                <li>Internal Transportation</li>
              </ul> */}
          </Row>
          {
            managedleadDefaultViewMore ? <div className='justify-content-end align-items-end d-flex'> <Button variant="link" onClick={() => handleHideViewMore()}>Hide <FontAwesomeIcon icon={faAngleUp} /> </Button> </div>: <></>
          }
          
        </div> : <></>}
        
      </Container>
    </Container>
    </>
  )
}

export default ManageLead