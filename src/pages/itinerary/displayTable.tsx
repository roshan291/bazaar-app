import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEye, faDownload, faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Daywiseplan from './dayWisePlan';
import { NoDataFound } from '../NoDataFound';
import DeleteSelectedItem from '../../Utilities/deleteSelectedItem';
import { useNavigate } from 'react-router-dom';

const DisplayTable = (props: any) => {

    const [changeModalshow, setChangeModalShow] = useState(false);
    const [selectedJourney, setSelectedJourney] = useState<string>("");
    const [selectedId, setselectedId] = useState<string>("");

    const navigate = useNavigate(); 

    const handleView = (item: any) => {
        navigate("/itineray/view");
    }

    const MyDoc = (pdfdata: any) => (
        <Document>
            <Daywiseplan createItinerary = {pdfdata}/>
        </Document>
    );
    
    const handleDeleteItinerary = (journey: any, id: any) => {
        setChangeModalShow(true)
        setSelectedJourney(journey)
        setselectedId(id)
    }
    const handleChangeClose = () => setChangeModalShow(false);

   

  return (
    <>
    <DeleteSelectedItem closeModal = {setChangeModalShow} show = {changeModalshow} onHide = {handleChangeClose} journey = {selectedJourney} id = {selectedId} />
    
    <div className="display_table_main_wrapper container">
        <Table striped bordered hover>
        <thead>
            <tr>
                <th># ID</th>
                <th>Created Date</th>
                <th>Itinerary Title</th>
                <th>Customer Name</th>
                <th>Mobile Number</th>
                <th>Budget / Cost</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                 props?.rowData?.map((item: any, index : any) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.createdDate}</td>
                    <td>{item.itineraryTitle}</td>
                    <td>{item.customerName}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.budgetForTrip}</td>
                    <td>{item.changestatus === "In process" ? "In Progress" : item.changestatus === "new" ? "New" : item.changestatus === "pending" ? "Pending" : item.changestatus === "confirmed" ? "Confirmed" : item.changestatus === "completed" ? "Completed" : "Canceled"}</td>
                    <td className='itinerary_actin_wrapper'>
                        <FontAwesomeIcon icon={faCopy} />
                        <FontAwesomeIcon icon={faEye} onClick={() => handleView(item)}/>
                        <PDFDownloadLink document={<MyDoc pdfdata = {item} />} fileName={item.itineraryTitle}>
                            {({ loading }) =>
                                loading ? 'Loading...' : <FontAwesomeIcon icon={faDownload} />
                            }
                        </PDFDownloadLink>
                        <FontAwesomeIcon icon={faXmark} onClick = {() => handleDeleteItinerary("itinerary", item?.id)}/>
                    </td>
                 </tr>)
            }
            
        </tbody>
        </Table>
        { 
            !props?.rowData?.length && <NoDataFound /> 
        }
    </div>
    </>
  )
}

export default DisplayTable