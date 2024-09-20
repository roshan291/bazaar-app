import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faEye, faDownload, faXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Daywiseplan from './dayWisePlan';

const DisplayTable = (props: any) => {

    console.log("props", props?.rowData);

    const handleView = (item: any) => {

    }
    // const pdfdownload = (item: any) => {
    //     console.log("pdfdownload", item);
    // }

    const MyDoc = (pdfdata: any) => (
        <Document>
            <Daywiseplan createItinerary = {pdfdata}/>
        </Document>
    );
    
  return (
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
                    <td>{item.dateOfIssue}</td>
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
                        <FontAwesomeIcon icon={faXmark} />
                    </td>
                 </tr>)
            }
        </tbody>
        </Table>
    </div>
  )
}

export default DisplayTable