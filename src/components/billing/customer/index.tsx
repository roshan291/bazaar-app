import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/esm/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faSquarePlus, faXmark, faEye, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CreateNewCustomer from '../../../Utilities/CreateNewCustomer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../../../store/actions/createNewCustomer';
import LoadingSpinner from '../../../Utilities/LoadingSpinner';
import Button from '../../buttons';
import DeleteSelectedItem from '../../../Utilities/deleteSelectedItem';
import { NoDataFound } from '../../../pages/NoDataFound';
import { useNavigate } from 'react-router-dom';
import styles from "./customer.module.css"
import ViewMyCustomer from '../../../Utilities/ViewMyCustomer';
import { Col, Form, Row } from 'react-bootstrap';

const MyCustomer = () => {
  const [data, setData] = useState([])
  const [createNewCustomerModalShow, setCreateNewCustomerModalShow] = useState(false as any);
  const [changeModalshow, setChangeModalShow] = useState(false);
  const [viewCustomer, setViewCustomer] = useState(false)
  const [viewCustomerData, setViewCustomerData] = useState([] as any)
  const [selectedJourney, setSelectedJourney] = useState<string>("");
  const [selectedId, setselectedId] = useState<string>("");
  const navigate = useNavigate();
  
  useEffect(() => {
      axios.get('http://localhost:8000/createcustomer').then((res: any) => {
      const customer = res.data;
      setData(customer);
    });
  },[])

  useEffect(() => {
    axios.get('http://localhost:8000/createcustomer').then((res: any) => {
    const customer = res.data;
    setData(customer);
  });
},[changeModalshow, createNewCustomerModalShow])

  const dispatch = useDispatch(); 

  const createNewCustomerData = useSelector(
    (state: any) => state?.data
  );

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  useEffect(() => {
    if(createNewCustomerData?.length) {
      setData(createNewCustomerData);
    }
  }, [createNewCustomerData])

  const handleCreateNewCustomer = () => {
    setCreateNewCustomerModalShow(true)
  }

  const handleUpdateCustomer = (id: any) => {
    navigate(`/customer/update/${id}`)
  }
  const handleDeleteCustomer = (journey: any, id: any) => {
    setChangeModalShow(true)
    setSelectedJourney(journey)
    setselectedId(id)
  }

  const handleChangeClose = () => setChangeModalShow(false);

  const viewHandler = (data: any) => {
    setViewCustomer(true)
    setViewCustomerData(data)
  }

  const handleViewClose = () => setViewCustomer(false);
  
  return (
    <>
    <ViewMyCustomer show = {viewCustomer} onHide = {handleViewClose} data = {viewCustomerData} />
    <DeleteSelectedItem closeModal = {setChangeModalShow} show = {changeModalshow} onHide = {handleChangeClose} journey = {selectedJourney} id = {selectedId} />
    <div className=''>
     
      <CreateNewCustomer closeModal = {setCreateNewCustomerModalShow} show = {createNewCustomerModalShow} onHide={() => setCreateNewCustomerModalShow(false)} />
      <div className={styles.invoiceFilterWrapperTop}>
      <div className={`container`}>
      <Row style={{alignItems: "center"}}>
          <Col className={styles.invoice_header} xs={12} md={4}>
            <h5>
            Customer
            </h5>
        </Col>
        <Col xs={12} md={8} style ={{display: "flex", justifyContent: "end"}}>
         
        <div className={styles.searchForm}>
          <Form.Control
            type="text"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <Button variant="primary" onClick={handleCreateNewCustomer}>New Customer
        </Button>
        </Col>
        </Row>
        
        
      </div>
       
      </div>
      <div className="display_table_main_wrapper container customer_page">
      
        <div className={styles.addnewcustomer}>
        {/* <h5>Customer</h5>
        <Button variant="primary" type="button" onClick={() => handleCreateNewCustomer()}>
          New Customer <FontAwesomeIcon icon={faSquarePlus} />
        </Button> */}

        </div>
        <table>
        <thead>
            <tr>
                <th> # No</th>
                <th>Created Date</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
              data?.map((item: any, index: any) => <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item?.createdDate}</td>
                <td>{item.customerFirstName} {item.customerLastName} </td>
                <td>{item.customerEmail}</td>
                <td>{item.customerMobile}</td> 
                <td>
                    <FontAwesomeIcon icon={faPenToSquare} onClick = {() => handleUpdateCustomer(item.id)}/>
                    <FontAwesomeIcon icon={faXmark} onClick = {() => handleDeleteCustomer("mycustomer",item.id)}/>
                    <FontAwesomeIcon icon={faEye} onClick = {() => viewHandler(item)}/>
                </td>
              </tr>)
            }
        </tbody>
        </table>
          { 
            !data?.length && <NoDataFound /> 
          }
      </div>
    </div>
    </>
  )
}

export default MyCustomer