import React from 'react'
import Form from 'react-bootstrap/esm/Form'; 
import { pleaseEnterText } from '../constants';

const CustomTextInput = (props: any) => {
  const { value, onChange, name, required, placeholder } = props; 
  return (
    <Form.Control
        required = {required}
        type="text"
        placeholder={pleaseEnterText}
        value={value} onChange={onChange} name={name}
    />
  )
}

export default CustomTextInput