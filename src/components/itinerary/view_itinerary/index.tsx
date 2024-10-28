import React from 'react'
import styles from "./view_itinerary.module.css"
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ViewItinerary = () => {
    const navigate = useNavigate(); 
    const handleBackToItineary = () => {
        const page = sessionStorage.getItem("previouspage");
        if(page) {
            return page.includes("ready") ? navigate(`/itinerary/ready`) : page.includes("group") ? navigate(`/itinerary/group`) : navigate(`/itinerary/customised`);
        }
    }
  return (
    <div className={styles.page_wrapper}>
        <Container>
            <Row className='d-flex justify-content-end'>
            <Button variant="info" className = {styles.backButton} onClick={handleBackToItineary}>
                Back
            </Button>
            </Row>
        </Container>
        <Container>
            <Row>
               
                <h5>Summary</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
                
            </Row>
            <Row>
                <h5>Customer Information</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
            <Row>
                <h5>Welcome Note</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
            <Row>
                <h5>Day wise Plan</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
            <Row>
                <h5>Inclusion & Exclusion</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
            <Row>
                <h5>Cost</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
            <Row>
                <h5>Tips & Other Visa Information</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
            <Row>
                <h5>Thank You</h5>
                <div className={styles.content_wrapper}>
                    <p>Label:<span>Text</span></p>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default ViewItinerary