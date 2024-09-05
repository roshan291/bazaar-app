import React from 'react'
import Form from 'react-bootstrap/esm/Form'; 
import { pleaseSelect } from '../constants';

const CustomCustomerDropdown = (props: any) => {
  const { value, onChange, name, dropdownData, required, placeholder } = props; 
  return (
    <Form.Select required = {required} value={value} onChange={onChange} name={name} >
        <option value="" defaultValue = "">{pleaseSelect}</option>
        {
          dropdownData?.map((item: any, index: any) => <option value={`${item.customerFirstName} ${item.customerLastName}`} key = {index}>{item?.customerFirstName} {item?.customerLastName}</option>)
        }
    </Form.Select>
  )
}

export default CustomCustomerDropdown