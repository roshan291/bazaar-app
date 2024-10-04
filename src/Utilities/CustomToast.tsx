import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { selectToastMessage } from '../constants';

const CustomToast = (props: any) => {
 
  const [show, setShow] = useState(props?.showToast);

  useEffect(() => {
    setShow(props?.showToast)
  }, [props?.showToast])

  const renderTitles = (variantType: any) => {
    return variantType ? selectToastMessage?.success : selectToastMessage?.failed
  }

  const renderDescription = (variantType: any) => {
    return variantType ? selectToastMessage?.successMessage : selectToastMessage?.failedMessage
  }

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9 }}>
      <Toast bg={props?.variantType ? "success": "danger"} onClose={() => setShow(false)} show={show} delay={5000} autohide>
        <Toast.Body className={'text-white'} style={{ "paddingLeft": 20}}>
          <h5>{renderTitles(props?.variantType)}</h5>
          <label>{renderDescription(props?.variantType)}</label>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CustomToast