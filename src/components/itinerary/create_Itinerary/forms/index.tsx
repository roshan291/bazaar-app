// import React, { useState } from 'react'
// import MultiStep from 'react-multistep'
// import StepOne from './forms/StepOne';
// import StepTwo from './forms/StepTwo';
// import StepThree from './forms/StepThree';  
// import { nextButton, prevButton } from './forms/steps';
// import { Col, Row } from 'react-bootstrap';
// import Button from '../../buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import StepFour from './forms/StepFour';
// import { generateCurrentDateAndTime, generateUniqueId } from '../../../Utilities/Utils';

// const CreateItinerary = () => {

//     const [formData, setFormData] = useState({
//         name: 'Pavani',
//         email: '',
//         password: 'sexwithpavani',
//         agreement: "",
//         id: `{generateUniqueId()}`,
//         iteneraryId: `HB${generateUniqueId()}`,
//         createdDate: generateCurrentDateAndTime(),
//         itineraryTitle: "",
//         destination: "",
//         typeOfHoliday: "",
//         noOfAdults: "",
//         noOfKids: "",
//         startDate :"",
//         endDate :"",
//         coupleList: "",
//         currencyType: "",
//         budgetForTrip: "",
//         serviceList: [
//             {id: 1, isChecked: false, serviceName: "Airfare"},
//             {id: 2, isChecked: false, serviceName: "Internal Transportation"},
//             {id: 3, isChecked: false, serviceName: "Hotel Stay"},
//             {id: 4, isChecked: false, serviceName: "Sightseeing"},
//             {id: 5, isChecked: false, serviceName: "Visa Fees"},
//             {id: 6, isChecked: false, serviceName: "Government Tax"},
//             {id: 7, isChecked: false, serviceName: "Surcharge"},
//             {id: 8, isChecked: false, serviceName: "Cruise Stay"},
//             {id: 9, isChecked: false, serviceName: "Free Goodies"},
//             {id: 10, isChecked: false, serviceName: "APAI - Stay & All Meals"},
//             {id: 11, isChecked: false, serviceName: "Passport Fees"},
//             {id: 12, isChecked: false, serviceName: "CP - Stay & Breakfast"},
//             {id: 13, isChecked: false, serviceName: "Tour Manager"},
//             {id: 14, isChecked: false, serviceName: "MAP - Stay, Breakfast & Dinner"},
//         ],
//         noOfNights: "",
//         travellers: "",
//         welcomenote: "",
//         customerName: "",
//         emailId: "",
//         mobileNumber: "",
//         address: "",
//         country: "",
//         state: "",
//         city: "",
//         postalCode: "", 
//         birthDate: "",
//         anniversaryDate: "",
//         note: "",
//         inclusion: "",
//         exclusion: "",
//         cost: "",
//         termsConditions: "",
//         tips: "",
//         otherVisaInformation: "",
//         thankyounote: "",
//         changestatus: "",
//         dayWisePlanFinal: [],
//       });
      
//     const handleChange = (input: any) => (e: any) => {
//         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//         setFormData({
//           ...formData,
//           [input]: value,
//         });
//       };

//     const handleSubmit = () => {
//     // Add any further actions like sending form data to the server
//     };

//     const steps = [
//         { title: 'Itinerary Summary', component: <StepOne formData={formData} handleChange={handleChange} /> },
//         { title: 'Customer Information', component: <StepTwo formData={formData} handleChange={handleChange}/> },
//         { title: 'Day Wise Plan', component: <StepThree formData={formData} handleChange={handleChange}/> },
//         { title: 'Inclusion / Exclusion', component: <StepFour formData={formData} handleChange={handleChange} /> },
//         { title: 'Cost', component: <StepFour formData={formData} handleChange={handleChange} /> },
//         { title: 'Tips', component: <StepFour formData={formData} handleChange={handleChange} /> },
//         { title: 'Thank you', component: <StepFour formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/> },

//       ];
          
//   return (
//     <>
//     <div className="page_top_banner">
//         <div className={`container`}>
//           <Row style={{alignItems: "center"}}>
//           <Col className="top_banner_left_panel" xs={12} md={4}>
//             <h5>
//                 Your Tour Itinerary
//             </h5>
//         </Col>
//         <Col className="top_banner_right_panel" xs={12} md={8} style ={{display: "flex", justifyContent: "end"}}>
//         <div className="top_banner_dropdown">
//           {/* <Form.Select aria-label="Default select example" value = {selectedStatus} onChange={(e) => handleSelectedStatus(e)}>
//             <option value="All">All</option>
//             {
//               itineraryStatus?.map((list: any) => <option value={list}>{list}</option>)
//             }
//           </Form.Select> */}
//         </div>
//         <div className="top_banner_searchForm">
//           {/* <Form.Control
//             type="text"
//             placeholder="Search..."
//           />
//           <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
//           {/* <CommonSearch 
//             onSearch={handleSearch} 
//             searchResult= {setSearchResults}
//           /> */}
//         </div>
//         <Button variant="secondary" size="sm" >Preview Web view <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
//         <Button variant="secondary" size="sm" className='ms-2' disabled>Send To Customer <FontAwesomeIcon icon={faEnvelope} /></Button>
//         </Col>
//         </Row>
//         </div>
//     </div>
//         <div className={`container custom_multiForm`}>
//             <MultiStep 
//                 steps={steps} 
//                 activeStep={0}
//                 showNavigation={true} 
//                 prevButton={prevButton} 
//                 nextButton={nextButton}>
//             </MultiStep> 
//             <h3>Tetx</h3>
//         </div>
//     </>
//   )
// }

// export default CreateItinerary

export {}