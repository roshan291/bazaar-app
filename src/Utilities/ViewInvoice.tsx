import React, { useEffect, useState } from 'react'
import styles from "../components/billing/invoice/invoice.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NoDataFound } from '../pages/NoDataFound'
import DeleteSelectedItem from './deleteSelectedItem'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, Document } from '@react-pdf/renderer'
import DownloadBill from '../components/billing/download-bill'
import { Table } from 'react-bootstrap'
const ViewInvoice = ({ data, isDelete } : any) => {

    const [selectedJourney] = useState("invoice");
    const [selectedId, setSelectedId] = useState("" as any)
    const [changeModalshow, setChangeModalShow] = useState(false);
    const navigate = useNavigate();
    
    const handleDelteInvoice = (id: any) => {
        console.log("id", id);
        setSelectedId(id)
        setChangeModalShow(true)
        // isDelete(true)
    }
    const handleChangeClose = () => setChangeModalShow(false);

    useEffect(() => {
        isDelete()
        console.log("TEST___________", changeModalshow, isDelete(true))
    }, [changeModalshow])

    const handleUpdateInvoice = (id:any) => {
        navigate(`/invoice/update/${id}`);
    }
    const handleDownloadInvoice = (id:any) => {

    }

    const MyDoc = (pdfdata: any) => (
        <Document>
            <DownloadBill billData = {pdfdata}/>
        </Document>
    );
  return (
    <>
    <DeleteSelectedItem closeModal = {setChangeModalShow} show = {changeModalshow} onHide = {handleChangeClose} journey = {selectedJourney} id = {selectedId} />
   
    <div className={`${styles.invoice_wrapper} container`}>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th># No</th>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Currency Type</th>
                    <th>Status</th> 
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item: any, index: any) => <tr>
                        <td>{index + 1}</td>
                        <td>{item?.createdDate}</td>
                        <td>{item?.customerName}</td>
                        <td>{item?.currencyType}</td>
                        <td>{item?.invoieStatus}</td>
                         
                        <td>
                            <FontAwesomeIcon icon={faPenToSquare}  className='edit_icon' onClick={() => handleUpdateInvoice(item?.id)}/>
                            {/* <FontAwesomeIcon icon={faDownload} className='download_icon' onClick={() => handleDownloadInvoice(item?.id)}/> */}
                            <PDFDownloadLink document={<MyDoc pdfdata = {item} />} fileName={item?.customerName}>
                            {({ loading }) =>
                                loading ? 'Loading...' : <FontAwesomeIcon icon={faDownload} />
                            }
                            </PDFDownloadLink>
                            <FontAwesomeIcon icon={faXmark}  className='delete_icon' onClick={() => handleDelteInvoice(item?.id)}/>
                        </td>
                    </tr>)
                }
            </tbody>
        </Table>
        { 
            !data?.length && <NoDataFound /> 
          }
    </div>
    </>
  )
}

export default ViewInvoice