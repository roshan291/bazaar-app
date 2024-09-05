import React from 'react'
import { Container, Row, Col, Button, Form  } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from "./viewallitinerary.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CustomItineraryCard from '../../../Utilities/CustomItineraryCard';
const ViewAllItinerary = () => {
  return (
    <>
        <Container className={styles.viewAllItineraryPage}>
          <Row className='align-items-center justify-content-between'>
            <Col xs lg="12">
                <Tabs
                defaultActiveKey="Customised Itinerary"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                    <Tab eventKey="Customised Itinerary" title="Customised Itinerary">
                        <Row className="p-4">
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Group Itinerary" title="Group Itinerary">
                        <Row className="p-4">
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Ready Itinerary" title="Ready Itinerary">
                        <Row className="p-4">
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                            <Col xs lg="6" className="mb-4">
                            <CustomItineraryCard />
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Col>
            <div className={styles.viewAllItinerarySearch}>
                <Form className={styles.searchForm}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Search by title" /><span className={styles.searchIcon}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </Form.Group>
                </Form>
            </div>
          </Row>
        </Container>
    </>
  )
}

export default ViewAllItinerary