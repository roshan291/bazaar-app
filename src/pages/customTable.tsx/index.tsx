import React from 'react'
import styles from "./table.module.css"
import { useNavigate } from 'react-router-dom';
import { navigationURL } from '../../constants';

const CustomTable = (props: any) => {

    const navigate = useNavigate(); 
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
    
    const handleNavigation = (url: any, title: any) => {
        localStorage.setItem("page", title)
        navigate(url)  
    }

    console.log("CustomTable",props)
  return (
    
    <>
        <h5 className={styles.title}>{props?.title} Status</h5>
        <table className={styles.tableWrapper}>
          <tbody>
          {
            props?.data?.map((item: any) => <tr key={item.id} className={styles.cardItem} onClick={() => handleNavigation(item?.url, item?.title)}>
                <td>
                <label>{item.title}</label>
                </td>
                <td>
                <label>{item.count}</label>
                </td>
            </tr>)
          }
          </tbody>
        </table>
    </>
  )
}

export default CustomTable