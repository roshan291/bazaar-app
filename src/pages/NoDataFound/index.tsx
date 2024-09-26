import React from 'react'
import styles from "./nodatafound.module.css";
import nodataFound from "../../assets/images/no-data.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
export const NoDataFound = () => {
  return (
    <div className={styles.nodataFound}>
      <img src = {nodataFound} alt = "no data found" />
      {/* <FontAwesomeIcon icon={faCircleExclamation} />
      <FontAwesomeIcon icon={faCircleExclamation} /> */}
      <h5>No results found..!!</h5>
    </div>
  )
}
