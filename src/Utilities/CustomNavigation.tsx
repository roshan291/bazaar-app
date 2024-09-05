import React,  {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const CustomNavigation = (props: any) => {

  const navigate = useNavigate(); 

  useEffect(() => {
    navigate(props?.url); 
  },[props?.url])
 
  return (
    <div>Loading...</div>
  )
}

export default CustomNavigation