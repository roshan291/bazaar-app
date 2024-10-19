import React from 'react'
import { Form } from 'react-bootstrap';

const CustomTimePicker = (props: any) => {
    const { value, onChange, name, minDate, maxDate, required } = props;
    return (
        <Form.Control
            required = {required}
            type="time"
            placeholder={"Time"}
            value={value} 
            onChange={onChange} 
            name={name}
            min={minDate}
            max={maxDate}
        />
    );
}

export default CustomTimePicker