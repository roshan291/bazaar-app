import React from 'react'
import styles from "../components/billing/invoice/invoice.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NoDataFound } from '../pages/NoDataFound'
const ViewInvoice = (props: any) => {
  return (
    <div className={styles.invoice_wrapper}>
        <table>
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
                    props?.data?.map((item: any, index: any) => <tr>
                        <td>{index + 1}</td>
                        <td>{item?.createdDate}</td>
                        <td>{item?.customerName}</td>
                        <td>{item?.currencyType}</td>
                        <td>{item?.invoieStatus}</td>
                         
                        <td>
                            <FontAwesomeIcon icon={faDownload} />
                            <FontAwesomeIcon icon={faPenToSquare} />
                            <FontAwesomeIcon icon={faXmark} />
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        { 
            !props?.data?.length && <NoDataFound /> 
          }
    </div>
  )
}

export default ViewInvoice