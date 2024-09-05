import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => {
  return (
    // <div className="loading-container">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    // </div> 
  )
}

export default LoadingSpinner