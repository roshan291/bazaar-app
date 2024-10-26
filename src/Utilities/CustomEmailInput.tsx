import React, { useEffect } from 'react'
import Form from 'react-bootstrap/esm/Form'; 
import { pleaseEnterEmail } from '../constants';

const CustomEmailInput = (props: any) => {
  const { value, onChange, name, required, placeholder} = props; 
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const validateEmail = (value: any) => { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
 
  useEffect(() => {
    setIsValidEmail(validateEmail(props?.value));
  }, [value])

  return (
    <Form.Control
        required = {required}
        type="email"
        placeholder={pleaseEnterEmail}
        value={value} 
        onChange={onChange} 
        name={name}
        isInvalid={!isValidEmail}
    />
  )
}

export default CustomEmailInput