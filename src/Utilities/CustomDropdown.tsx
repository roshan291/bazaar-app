import React from 'react'
import Form from 'react-bootstrap/esm/Form'; 
import { pleaseSelect } from '../constants';

const CustomDropdown = (props: any) => {
  console.log("CustomDropdown", props)
  const { value, onChange, name, dropdownData, required, placeholder } = props; 
  return (
    <Form.Select required = {required} value={value} onChange={onChange} name={name} >
        <option value="" defaultValue = "">{!placeholder ? pleaseSelect : placeholder }</option>
        {
          dropdownData?.map((item: any, index: any) => <option value={item} key = {index}>{item}</option>)
        }
    </Form.Select>
  )
}

export default CustomDropdown