import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { manageLeadSideNavMoreList } from '../constants';
import styles from "../components/lead/manage_Lead/manage.module.css"

const ManageLeadSideNavMore = (props: any) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        {
                            manageLeadSideNavMoreList?.map((navList: any, index: any) => 
                            <Col xs={6} md={4} key = {index} className={styles.manageSideNavModal}>
                                <h6><span>{navList.icon} &nbsp;</span>{navList?.navTitle}</h6>
                            </Col> )
                        }
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default ManageLeadSideNavMore