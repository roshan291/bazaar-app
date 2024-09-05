import React, {useState, useEffect} from 'react'
import CustomNavigation from '../../../Utilities/CustomNavigation'
import { navigationURL } from '../../../constants'
import DisplayTable from '../../../pages/itinerary/displayTable'
import axios from 'axios'

const ReadyItinerary = () => {
    const [navigateUrl, setNavigateUrlUrl] = useState("")
    const [data, setData] = useState([])
    const handleNavigation = () => {
        setNavigateUrlUrl(navigationURL.createItinerary)
    }
    
    useEffect(() => {
      axios.get('http://localhost:8000/createitinerary').then((res: any) => {
      const customer = res.data;
      setData(customer);
    });
  },[])

  return (
    <>
    <div className='manage_top_view'>
      <CustomNavigation url = {navigateUrl}/>
      <div >ReadyItinerary</div>
      <h5 onClick={handleNavigation}>Create Itinerary</h5>
    </div>
    <DisplayTable rowData = {data}/>
    </>
  )
}

export default ReadyItinerary