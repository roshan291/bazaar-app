import React from 'react'
import Form from 'react-bootstrap/esm/Form'; 
import { pleaseEnterNumber } from '../constants';

const CustomNumberInput = (props: any) => {
  const { value, onChange, name, required, onKeyPress, placeholder } = props; 
  return (
    <Form.Control
        required = {required}
        type="text"
        placeholder={pleaseEnterNumber}
        value={value} 
        onChange={onChange} 
        name={name}
        onKeyPress={onKeyPress}
    />
  )
}

export default CustomNumberInput