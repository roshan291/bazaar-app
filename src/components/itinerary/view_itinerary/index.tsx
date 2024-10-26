import React from 'react'
import styles from "./view_itinerary.module.css"
import { Container, Row } from 'react-bootstrap';
const ViewItinerary = () => {
  return (
    <div className={styles.page_wrapper}>
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