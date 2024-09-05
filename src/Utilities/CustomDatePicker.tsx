import React from 'react'
import Form from 'react-bootstrap/esm/Form';
import { startDate } from '../constants';

const CustomDatePicker = (props: any) => {
    const { value, onChange, name, minDate, maxDate, required } = props;
    return (
        <Form.Control
            required = {required}
            type="date"
            placeholder={startDate}
            value={value} 
            onChange={onChange} 
            name={name}
            min={minDate}
            max={maxDate}
        />
    );
}

export default CustomDatePicker