import React from 'react'
import { useParams } from 'react-router-dom';

const UpdateLead = () => {
    const { id } = useParams();
  return (
    <div>Update lead {id}</div>
  )
}

export default UpdateLead