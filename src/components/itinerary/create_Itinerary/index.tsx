import React, {useEffect, useState, useId} from 'react'
import styles from "./create_itinerary.module.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { itineraryDefaultConstant } from '../constants';
import CustomTextInput from '../../../Utilities/CustomTextInput';
import CustomDropdown from '../../../Utilities/CustomDropdown';
import { itineraryStatus, selectCouple, selectCurrency, selectThankyouNote, selectTypeOfHoliday, selectWelcomeNote } from '../../../constants';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CustomDatePicker from '../../../Utilities/CustomDatePicker';
import CustomNumberInput from '../../../Utilities/CustomNumberInput';
import { onKeyPress } from '../../../Utilities/Utils';
import CustomEmailInput from '../../../Utilities/CustomEmailInput';
import CustomeTextarea from '../../../Utilities/CustomeTextarea';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEnvelope, faCircleArrowUp, faTrashCan, faTag, faPlus, faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Meal from '../../../pages/itinerary/meal';
import Description from '../../../pages/itinerary/description';
import Transportation from '../../../pages/itinerary/transportation';
import HotelCheckout from '../../../pages/itinerary/hotelCheckout';
import Sightseeing from '../../../pages/itinerary/sightseeing';
import Hotel from '../../../pages/itinerary/hotel';
import NextDay from '../../../pages/itinerary/addNextDay';
import { selectCountries } from '../../../constants/countries';
import Daywiseplan from '../../../pages/itinerary/dayWisePlan';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';
import RichTextEditor from '../../../Utilities/CreateRichTextEditor';

const CreateItinerary = () => {
    const uniqueId = useId(); 
    const [validated, setValidated] = useState(false);
    const [addDayCount, setAddDayCount] = useState(1);
    const [dayWisePlan, setDayWisePlan]= React.useState([] as any)
    const [opeNextDay, setOpeNextDay] = React.useState(false);
    const [openMeal, setOpenMeal] = React.useState(false);
    const [openDescription, setOpenDescription] = React.useState(false); 
    const [openTransportation, setOpenTransportation] = React.useState(false);
    const [openHotel, setOpenHotel] = React.useState(false);
    const [openHotelCheckout, setOpenHotelCheckout] = React.useState(false);
    const [openSightseeing, setOpenSightseeing] = React.useState(false);

    const [nextDayData, setNextDayData] = React.useState("" as any);
    const [daydescription, setDayDescription] = React.useState([] as any);
    const [dayMeal, setDayMeal] = React.useState([] as any);
    const [dayTransportation, setDayTransportation] = React.useState([] as any);
    const [dayHotel, setDayHotel] = React.useState([] as any);

    const [dayDescriptionSelectedItemID, setDdayDescriptionSelectedItemID] = useState(Number);
    const [dayMealSelectedItemID, setDdayMealSelectedItemID] = useState(Number);
    const [dayNextDaySelectedItemID, setDayNextDaySelectedItemID] = useState(Number);
    const [dayAddOwnHotelSelectedItemID, setDayAddOwnHotelSelectedItemID] = useState(Number);
    const [dayTransportationSelectedID, setDayTransportationSelectedID] = useState(Number);
    const [daySighseeingSelectedID, setDdaySighseeingSelectedID] = useState(Number);
    const [dayHotelSelectedID, setDdayHotelSelectedID] = useState(Number);
    const [loading, setLoading] = React.useState(false)
    // sightseeing

    console.log("nextDayData", nextDayData)

    const [createItinerary, setCreateItinerary] = useState({
        id: uniqueId,
        itineraryTitle: "",
        destination: "",
        typeOfHoliday: "",
        noOfAdults: "",
        noOfKids: "",
        startDate :"",
        endDate :"",
        coupleList: "",
        currencyType: "",
        budgetForTrip: "",
        serviceList: [
            {id: 1, isChecked: false, serviceName: "Airfare"},
            {id: 2, isChecked: false, serviceName: "Internal Transportation"},
            {id: 3, isChecked: false, serviceName: "Hotel Stay"},
            {id: 4, isChecked: false, serviceName: "Sightseeing"},
            {id: 5, isChecked: false, serviceName: "Visa Fees"},
            {id: 6, isChecked: false, serviceName: "Government Tax"},
            {id: 7, isChecked: false, serviceName: "Surcharge"},
            {id: 8, isChecked: false, serviceName: "Cruise Stay"},
            {id: 9, isChecked: false, serviceName: "Free Goodies"},
            {id: 10, isChecked: false, serviceName: "APAI - Stay & All Meals"},
            {id: 11, isChecked: false, serviceName: "Passport Fees"},
            {id: 12, isChecked: false, serviceName: "CP - Stay & Breakfast"},
            {id: 13, isChecked: false, serviceName: "Tour Manager"},
            {id: 14, isChecked: false, serviceName: "MAP - Stay, Breakfast & Dinner"},
        ],
        noOfNights: "",
        travellers: "",
        welcomenote: "",
        customerName: "",
        emailId: "",
        mobileNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        postalCode: "", 
        birthDate: "",
        anniversaryDate: "",
        note: "",
        inclusion: "",
        exclusion: "",
        cost: "",
        termsConditions: "",
        tips: "",
        otherVisaInformation: "",
        thankyounote: "",
        changestatus: "",
        dayWisePlanFinal: [],
    })

    const {
        itineraryTitle,
        destination,
        typeOfHoliday,
        noOfAdults,
        noOfKids,
        startDate,
        endDate,
        coupleList,
        currencyType,
        budgetForTrip,
        noOfNights,
        travellers,
        serviceList,
        welcomenote,
        customerName,
        emailId,
        mobileNumber,
        address,
        country,
        state,
        city,
        postalCode, 
        birthDate,
        anniversaryDate,
        note,
        inclusion,
        exclusion,
        cost,
        termsConditions,
        tips,
        otherVisaInformation,
        thankyounote, 
        changestatus, 
    } = createItinerary;
    

    console.log("createItinerary", createItinerary)
    const handleSubmit = (event: any) => {
        console.log("createitinerary called")
        event.preventDefault();
        
        // const form = event.currentTarget;
        // console.log("createitinerary ------------------------", form.checkValidity())
        // if (form.checkValidity() === false) {
        //   event.stopPropagation();
        //   console.log("createitinerary called if")
        // } else {
            console.log("createitinerary called else")
            axios.post(`http://localhost:8000/createitinerary`, createItinerary).then((response) => {
                console.log("onAdd create itinerary Submit", response?.status)
                setLoading(response?.status === 201 ? false : true)
            }).catch((error) => {
                setLoading(false)
                console.log("failed with", error)
            })
            setValidated(true);
    //   };
    }
      

    const MyDoc = () => (
        <Document>
            <Daywiseplan createItinerary = {createItinerary}/>
        </Document>
    );

  const handleChangeItinerary = (e: any) => {
    const target = e.target;
    
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCreateItinerary({
      ...createItinerary,
      [name]: value
    });
  }

  const handleChangeLeadCheckBox = (id:any) => {
    setCreateItinerary((prevCreateLead: any) => {
      const updatedServiceList = prevCreateLead.serviceList.map((service:any) =>
        service.id === id
          ? { ...service, isChecked: !service.isChecked }
          : service
      );

      return {
        ...prevCreateLead,
        serviceList: updatedServiceList,
      };
    });
  };

  const addPlan = {
    id: addDayCount,
    day: nextDayData, 
    description: [],
    transportation: [],
    hotel: [],
    checkoutHotel: [],
    sightseeing: [],
    meal: [],
  }

  useEffect(() => {
    setDayWisePlan([...dayWisePlan, addPlan])
  }, [nextDayData])

//   useEffect(() => {
//   const dayWisePlanFilter = dayWisePlan.find((item:any) => item.id === dayDescriptionSelectedItemID);
//   dayWisePlanFilter?.description.push(daydescription);
//   setDayWisePlan([...dayWisePlan])
//   }, [daydescription])

useEffect(() => {
    const dayWisePlanFilter = dayWisePlan.find((item:any) => item.id === dayDescriptionSelectedItemID);
    if (dayWisePlanFilter) {
      const updatedDescription = dayWisePlanFilter.description.concat(daydescription);
      const updatedDayWisePlan = dayWisePlan.map((item: any) => {
        if (item.id === dayDescriptionSelectedItemID) {
          return { ...item, description: updatedDescription };
        }
        return item;
      });
      setDayWisePlan(updatedDayWisePlan);
    }
  }, [daydescription]);

  useEffect(() => {
    const dayWisePlanFilter = dayWisePlan.find((item:any) => item.id === dayMealSelectedItemID);
    if (dayWisePlanFilter) {
      const updatedMeal = dayWisePlanFilter.meal.concat(dayMeal);
      const updatedDayWisePlan = dayWisePlan.map((item: any) => {
        if (item.id === dayMealSelectedItemID) {
          return { ...item, meal: updatedMeal };
        }
        return item;
      });
      setDayWisePlan(updatedDayWisePlan);
    }
  }, [dayMeal]);

  useEffect(() => {
    const dayWisePlanFilter = dayWisePlan.find((item:any) => item.id === dayTransportationSelectedID);
    if (dayWisePlanFilter) {
      const updatedTrasportation = dayWisePlanFilter.transportation.concat(dayTransportation);
      const updatedDayWisePlan = dayWisePlan.map((item: any) => {
        if (item.id === dayTransportationSelectedID) {
          return { ...item, transportation: updatedTrasportation };
        }
        return item;
      });
      setDayWisePlan(updatedDayWisePlan);
    }
  }, [dayTransportation]);

  useEffect(() => {
    const dayWisePlanFilter = dayWisePlan.find((item:any) => item.id === dayHotelSelectedID);
    if (dayWisePlanFilter) {
      const updatedHotel = dayWisePlanFilter.hotel.concat(dayHotel);
      const updatedDayWisePlan = dayWisePlan.map((item: any) => {
        if (item.id === dayHotelSelectedID) {
          return { ...item, hotel: updatedHotel };
        }
        return item;
      });
      setDayWisePlan(updatedDayWisePlan);
    }
  }, [dayHotel]);

    useEffect(() => {
        setCreateItinerary(prevState => ({
            ...prevState,
            dayWisePlanFinal: dayWisePlan
        }));
    }, [dayWisePlan]);


   const addWisePlan = () => {
    setAddDayCount(addDayCount + 1)
    // setDayWisePlan([...dayWisePlan, addPlan])
    setOpeNextDay(true)
   }

   console.log("Roshan clicked on next day", dayWisePlan);

    const handleAddDayDescription = (selectedItem: any) => {
        setDdayDescriptionSelectedItemID(selectedItem)
        setOpenDescription(true)
    }
    const handleAddTransportation = (selectedItem: any) => {
        setDayTransportationSelectedID(selectedItem)
        setOpenTransportation(true)
    }
    const handleAddHotel = (selectedItem: any) => {
        setDdayHotelSelectedID(selectedItem)
        setOpenHotel(true)
    }
    const handleAddCheckoutHotel = (selectedItem: any) => {
         setDdayDescriptionSelectedItemID(selectedItem)
        setOpenHotelCheckout(true)
    }
    const handleAddSightseeing = (selectedItem: any) => {
        setDdaySighseeingSelectedID(selectedItem)
        setOpenSightseeing(true)
    } 
    const handleAddMealFood = (selectedItem: any) => {
        setDdayMealSelectedItemID(selectedItem)
        setOpenMeal(true);
    }

   


  return (
<>
    <NextDay show = {opeNextDay} onHide = {() => setOpeNextDay(false)} getnextDayData = {setNextDayData}/>
    <Meal show = {openMeal} onHide = {() => setOpenMeal(false)} getDayMeal = {setDayMeal}/>
    <Description show = {openDescription} onHide = {() => setOpenDescription(false)} getDayDescription = {setDayDescription}/>
    <Transportation show = {openTransportation} onHide = {() => setOpenTransportation(false)} getDayTransportation = {setDayTransportation}/>
    <HotelCheckout show = {openHotelCheckout} onHide = {() => setOpenHotelCheckout(false)} />
    <Sightseeing show = {openSightseeing} onHide = {() => setOpenSightseeing(false)} />
    <Hotel show = {openHotel} onHide = {() => setOpenHotel(false)} getDayHotel = {setDayHotel}/>
                   
    <Container className={`${styles.create_itinerary_page} manage_top_view`}>
         <Container className="mb-3">
            <Row className='d-flex align-items-center justify-content-center'>
                <Col><h5 className='mb-0'>YOUR TOUR ITINERARY </h5></Col>
                {/* ROSHAN BANGALORE PACKAGE (#HBHITR78) */}
                <Col className='d-flex align-items-center justify-content-end'>
                    <Button variant="outline-secondary" size="sm" >Preview Web view <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                    {/* <Button variant="outline-secondary" size="sm" className='ms-2'>Preview PDF <FontAwesomeIcon icon={faMagnifyingGlass} /></Button> */}
                    {/* <Button variant="outline-secondary" size="sm" className='ms-2'>
                        <PDFDownloadLink document={<MyDoc />} fileName="syed.pdf">
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading...' : 'Preview pdf'
                            }
                        </PDFDownloadLink><FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button> */}
                    <Button variant="outline-secondary" size="sm" className='ms-2' disabled>Send To Customer <FontAwesomeIcon icon={faEnvelope} /></Button>
                </Col>
            </Row>
        </Container>
       <Container>
        <Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="p-2 mb-3 tab_default_style">Summary</div>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Itinerary Title<span className='required'>*</span></Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {itineraryTitle} onChange = {handleChangeItinerary} name = "itineraryTitle" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Destination</Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {destination} onChange = {handleChangeItinerary} name = "destination" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Type of Holidays<span className='required'>*</span></Form.Label>
                            <Col>
                            <CustomDropdown required = {false} value = {typeOfHoliday} onChange = {handleChangeItinerary} name = "typeOfHoliday" dropdownData = {selectTypeOfHoliday} />
                            </Col>
                        </Form.Group>
                    </Col>

                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Adults</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {noOfAdults} onChange = {handleChangeItinerary} name = "noOfAdults" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Child</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {noOfKids} onChange = {handleChangeItinerary} name = "noOfKids" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Start Date</Form.Label>
                            <Col >
                                <CustomDatePicker required = {false} value = {startDate} onChange = {handleChangeItinerary} name = "startDate" minDate = {new Date().toISOString().split("T")[0]} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>End Date</Form.Label>
                            <Col >
                                <CustomDatePicker required = {false} value = {endDate} onChange = {handleChangeItinerary} name = "endDate" minDate = {new Date().toISOString().split("T")[0]} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Nights</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {noOfNights} onChange = {handleChangeItinerary} name = "noOfNights" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Travellers</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {travellers} onChange = {handleChangeItinerary} name = "travellers" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Budget/Cost</Form.Label>
                            <Col >
                                <CustomNumberInput onKeyPress = {onKeyPress} required = {false} value = {budgetForTrip} onChange = {handleChangeItinerary} name = "budgetForTrip" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Cost For</Form.Label>
                            <Col >
                                <CustomDropdown required = {false} value = {coupleList} onChange = {handleChangeItinerary} name = "coupleList" dropdownData = {selectCouple} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Currency</Form.Label>
                            <Col >
                                <CustomDropdown required = {false} value = {currencyType} onChange = {handleChangeItinerary} name = "currencyType" dropdownData = {selectCurrency} />
                            </Col>
                        </Form.Group>
                    </Col>
                    
                    <Row>
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <h6 className="mb-2 mt-3">Tour Cost Cover</h6>
                            <Col sm="12">
                            <Row className="mb-12">
                                {
                                serviceList?.map((service: any) => <Form.Group as={Col} md="3" key={service?.serviceName} className='checkbox_customeStyle'>
                                    <label key={service.id}>
                                    <input
                                        type="checkbox"
                                        checked={service.isChecked}
                                        onChange={() => handleChangeLeadCheckBox(service.id)}
                                    />
                                    {service.serviceName}
                                    </label>
                                </Form.Group>)
                                }
                                <div>
                                {/* <Button variant="link" onClick={handleAddMoreServices}>Add more</Button> */}
                                </div>
                            </Row>
                            </Col>
                        </Form.Group>
                        <Col sm="4">
                        <Form.Group className="mb-4" controlId="Itinerary Title">
                            <br />
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Welcome Note</Form.Label>
                            <Col> 
                                <CustomDropdown required = {false} value = {welcomenote} onChange = {handleChangeItinerary} name = "welcomenote" dropdownData = {selectWelcomeNote} />
                            </Col>
                        </Form.Group>
                    </Col>
                    </Row>
                </Row>
                <div className="p-2 mb-3 tab_default_style">Customer Information</div>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Customer name </Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {customerName} onChange = {handleChangeItinerary} name = "customerName" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Email Id </Form.Label>
                            <Col>
                                <CustomEmailInput required = {false} value = {emailId} onChange = {handleChangeItinerary} name = "emailId" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Mobile Number</Form.Label>
                            <Col>
                                <CustomNumberInput required = {false} value = {mobileNumber} onChange = {handleChangeItinerary} name = "mobileNumber" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Country</Form.Label>
                            <Col>
                            <CustomDropdown placeholder = "Select Country" required = {false} value = {country} onChange = {handleChangeItinerary} name = "country" dropdownData = {selectCountries} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>State</Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {state} onChange = {handleChangeItinerary} name = "state" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>City</Form.Label>
                            <Col>
                                <CustomTextInput required = {false} value = {city} onChange = {handleChangeItinerary} name = "city" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Pincode</Form.Label>
                            <Col>
                                <CustomNumberInput required = {false} value = {postalCode} onChange = {handleChangeItinerary} name = "postalCode" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Birth Date</Form.Label>
                            <Col>
                                <CustomDatePicker required = {false} value = {birthDate} onChange = {handleChangeItinerary} name = "birthDate" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Anniversary Date</Form.Label>
                            <Col>
                                <CustomDatePicker required = {false} value = {anniversaryDate} onChange = {handleChangeItinerary} name = "anniversaryDate" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Address</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {address} onChange = {handleChangeItinerary} name = "address" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-1" controlId="Itinerary Title">
                            <Form.Label column  className='d-flex align-items-start justify-content-start'>Note</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {note} onChange = {handleChangeItinerary} name = "note" />
                                {/* <RichTextEditor /> */}
                            </Col>
                        </Form.Group>
                    </Col> 
                    
                </Row>
                <br />
                <div className="p-2 mb-4 tab_default_style">Day Wise Plan</div>
                 
                <div className={styles.daywise_block_main_wrapper}>     
                    {
                        dayWisePlan?.filter((item: any) => item.day !== "").map((item:any, index: any) => <div key = {item.index} className={styles.daywise_block_wrapper}>
                        <Row>
                            <Col sm="10">
                                {/* {JSON.stringify(item)} */}
                                <div className={styles.dayPlan}>{item?.day} <FontAwesomeIcon icon={faPenToSquare} /></div>
                                <div className={styles.dayDescription}>
                                    {
                                        item?.description?.map((description: any) => <>
                                            <label><strong>{description?.dayTitleText}</strong></label>
                                            <p>{description?.dayDescriptionText}</p>
                                        </>)
                                    }
                                </div>
                                <div className={styles.dayMeal}>
                                    {
                                        item?.meal?.map((meal: any) => <>
                                            <label><strong>{meal?.mealTitle}</strong></label>
                                            <p>{meal?.mealDescription}</p>
                                            <ul>
                                                {
                                                    meal?.selecdtMeal?.filter((check: any) => check.isChecked === true).map((list: any) => <li><FontAwesomeIcon icon={faCircleCheck} /> {list.selectMealType}</li>)
                                                }
                                            </ul>
                                        </>)
                                    }
                                </div>
                                <div className={styles.dayTransportation}>
                                    {
                                        item?.transportation?.map((transport: any) => <>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <span className='custom_label_color'>Transportation Title</span>
                                                        <label>{transport?.transportationTitle}</label>
                                                    </div>
                                                    <div className="line_devider_inside"></div>
                                                    <div>
                                                        <span className='custom_label_color'>Departing Country</span>
                                                        <label>{transport?.departingCountry}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Departing City</span>
                                                        <label>{transport?.departingCity}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Starting Point</span>
                                                        <label>{transport?.startingPoint}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>DepartDate</span>
                                                        <label>{transport?.departDate}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Actual Departure Time</span>
                                                        <label>{transport?.actualDepartureTime}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Reporting Time</span>
                                                        <label>{transport?.reportingTime}</label>
                                                    </div>
                                                    
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <span className='custom_label_color'>Transpotation Mode</span>
                                                        <label>{transport?.transpotationMode}</label>
                                                    </div>
                                                    <div className="line_devider_inside"></div>
                                                    <div>
                                                        <span className='custom_label_color'>Arrival Country</span>
                                                        <label>{transport?.arrivalCountry}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Arrival City</span>
                                                        <label>{transport?.arrivalCity}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Ending Point</span>
                                                        <label>{transport?.endingPoint}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Arrial Date</span>
                                                        <label>{transport?.arrialDate}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Actual Arrival Time</span>
                                                        <label>{transport?.actualArrivalTime}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Transpotation Note</span>
                                                        <label>{transport?.transpotationNote}</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </>)
                                    }
                                </div>
                                <div className={styles.dayHotel}>
                                    {
                                        item?.hotel?.map((motal: any) => <>
                                            <Row>
                                                <Col>
                                                    <div>
                                                        <span className='custom_label_color'>CheckIn Date: </span>
                                                        <label>{motal?.checkInDate}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>CheckIn Time: </span>
                                                        <label>{motal?.checkInTime}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Number Of Nights: </span>
                                                        <label>{motal?.numberOfNights}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Adults: </span>
                                                        <label>{motal?.adults}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Rooms: </span>
                                                        <label>{motal?.rooms}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Childs: </span>
                                                        <label>{motal?.childs}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Extra bed: </span>
                                                        <label>{motal?.extrabed}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Room Types: </span>
                                                        <label>{motal?.roomTypes}</label>
                                                    </div>
                                                    <div>
                                                        <span className='custom_label_color'>Note: </span>
                                                        <label>{motal?.noteText}</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </>)
                                    }
                                </div>
                            </Col>
                            <Col sm="2" className='d-flex align-items-center justify-content-sm-end'>
                            <DropdownButton size="sm" id="dropdown-basic-button" variant="outline-danger" title="+ Add Plan">
                                <Dropdown.Item onClick={() => handleAddDayDescription(item.id)}><FontAwesomeIcon icon={faTag} /> Day Description</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddTransportation(item.id)}><FontAwesomeIcon icon={faTag} /> Add Transportation</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddHotel(item.id)}><FontAwesomeIcon icon={faTag} /> Add Hotel</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddCheckoutHotel(item.id)}><FontAwesomeIcon icon={faTag} /> Add Checkout Hotel</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddSightseeing(item.id)}><FontAwesomeIcon icon={faTag} /> Add Sightseeing</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleAddMealFood(item.id)}><FontAwesomeIcon icon={faTag} /> Add Meal/Food</Dropdown.Item>
                            </DropdownButton>
                            <div className={styles.dayPlanCountDelete}><FontAwesomeIcon icon={faTrashCan} /></div>
                            </Col>
                        </Row>
                        </div>)
                    }
                </div>   
                <div className={styles.nextDayPlan}>
                    <Button size="sm" onClick={addWisePlan} variant="outline-secondary">+ Next Day</Button>
                </div>                  
                <br />
                <div className="p-2 mb-3 tab_default_style">Inclusion / Exclusion</div>
                <Row>

                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Inclusion</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {inclusion} onChange = {handleChangeItinerary} name = "inclusion" />
                            </Col>
                        </Form.Group>
                    </Col> 
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="Itinerary Title">
                            <Form.Label column className='d-flex align-items-start justify-content-start'>Exclusion</Form.Label>
                            <Col>
                                <CustomeTextarea required = {false} value = {exclusion} onChange = {handleChangeItinerary} name = "exclusion" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <div className="p-2 mb-3 tab_default_style">Cost</div>
                    <Row>
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Cost</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {cost} onChange = {handleChangeItinerary} name = "cost" />
                                </Col>
                            </Form.Group>
                        </Col> 
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Term & Condition</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {termsConditions} onChange = {handleChangeItinerary} name = "termsConditions" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                <div className="p-2 mb-3 tab_default_style">Tips</div>
                    <Row>
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Tips</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {tips} onChange = {handleChangeItinerary} name = "tips" />
                                </Col>
                            </Form.Group>
                        </Col> 
                        <Col sm="6">
                            <Form.Group className="mb-3" controlId="Itinerary Title">
                                <Form.Label column className='d-flex align-items-start justify-content-start'>Other / Visa Infromaton</Form.Label>
                                <Col>
                                    <CustomeTextarea required = {false} value = {otherVisaInformation} onChange = {handleChangeItinerary} name = "otherVisaInformation" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                <div className="p-2 mb-3 tab_default_style">Thank you</div>
                    <Form.Group className="mb-3" controlId="Itinerary Title">
                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-start'>Thank you Note</Form.Label>
                        <Col sm="6"> 
                            <CustomDropdown required = {false} value = {thankyounote} onChange = {handleChangeItinerary} name = "thankyounote" dropdownData = {selectThankyouNote} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Itinerary Title">
                        <Form.Label column sm="2" className='d-flex align-items-end justify-content-start'>Change Status</Form.Label>
                        <Col sm="6"> 
                            <CustomDropdown required = {false} value = {changestatus} onChange = {handleChangeItinerary} name = "changestatus" dropdownData = {itineraryStatus} />
                        </Col>
                    </Form.Group>
                    <br />
                    <div className={styles.circleArrowUp}><Button variant="outline-primary"><FontAwesomeIcon icon={faCircleArrowUp} /></Button></div>
                <Button variant="primary" type='submit'>Save & Submit</Button>
            </Form>
        </Row>
       </Container>
    </Container>
    </>
  )
}

export default CreateItinerary