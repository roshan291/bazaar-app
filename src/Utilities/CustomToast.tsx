import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { selectToastMessage } from '../constants';
// import { res } from '../API/apiClient';
// import { setToastCallback } from '../API/apiClient';

const CustomToast = (props: any) => {
 
  const [toastStatus, setToastStatus] = useState(props?.showToast);
  const [toastType, setToastType] = useState(props?.variantType);

  const renderTitles = (variantType: any) => {
    return variantType ? selectToastMessage?.success : selectToastMessage?.failed
  }

  const renderDescription = (variantType: any) => {
    return variantType ? selectToastMessage?.successMessage : selectToastMessage?.failedMessage
  }

  console.log(props)

  return (
    <>
    {
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9 }}>
      <Toast bg={toastType} onClose={() => setToastStatus(false)} show={toastStatus} delay={5000} autohide>
        <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{renderTitles(toastType)}</strong>
            <small>5 Seconds ago</small>
        </Toast.Header>
        <Toast.Body className={'text-white'} style={{ "paddingLeft": 20}}>
          <label>{renderDescription(toastType)}</label>
        </Toast.Body>
      </Toast>
    </ToastContainer>
    }
    </>
  );
}

export default CustomToast