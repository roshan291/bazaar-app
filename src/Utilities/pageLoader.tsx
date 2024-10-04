import React from 'react'
import loading from "../assets/icons/loading.gif"
import loading1 from "../assets/icons/loading1.gif"
const PageLoader = () => {
  return (
    <div className='pageloader'>
        <img src = {loading1} alt = "loading" />
    </div>
  )
}

export default PageLoader