import React from 'react'
import Form from 'react-bootstrap/esm/Form'; 

const CustomeTextarea = (props: any) => {
  const { value, onChange, name, placeholder } = props; 
  return (
    <Form.Control 
        as="textarea" 
        rows={5} 
        value={value} 
        onChange={onChange}
        name= {name} 
    />
  )
}

export default CustomeTextarea