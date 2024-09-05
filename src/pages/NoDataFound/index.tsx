import React from 'react'
import styles from "./nodatafound.module.css";
import nodataFound from "../../assets/images/nodatafound.jpg"
export const NoDataFound = () => {
  return (
    <div className={styles.nodataFound}>
      <img src = {nodataFound} alt = "no data found" />
    </div>
  )
}
