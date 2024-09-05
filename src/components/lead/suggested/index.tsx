import React from 'react'
import styles from "./suggested.module.css"
import { Container, Row, Col, Button  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CustomItineraryCard from '../../../Utilities/CustomItineraryCard'
import SampleCarousel from '../../../pages/sampleCarousel'
import ViewAllItinerary from '../view-all-itinerary'

const Suggested = () => {
  return (
    <div className={styles.suggestedPage}>
      <Container fluid className={styles.suggestedPageTitle}>
        <Container>
          <Row className='align-items-center justify-content-between'>
            <Col xs lg="6">LEAD NUMBER</Col>
            <Col xs lg="6" className="justify-content-end align-items-end d-flex"><Button variant="light" size="sm"><FontAwesomeIcon icon={faCircleLeft} /> BACK</Button></Col>
          </Row>
        </Container>
      </Container>
      <Container className={styles.suggestedClientPlan}>
          <Row className='align-items-center'>
            <Col xs lg="3" className='mb-2'><span>Name</span>venkatesh</Col>
            <Col xs lg="3" className='mb-2'><span>Email</span>admin@holidaybazaar.co</Col>
            <Col xs lg="3" className='mb-2'><span>Mobile</span>8885513151</Col>
            <Col xs lg="3" className='mb-2'><span>Destination</span>Bangalore</Col>
            <Col xs lg="3" className='mb-2'><span>Date</span>02-Aug-2023 to 09-Sep-2023</Col>
            <Col xs lg="3" className='mb-2'><span>Adults</span>6</Col>
            <Col xs lg="3" className='mb-2'><span>Kinds</span>3</Col>
            <Col xs lg="3" className='mb-2'><span>Hotel Preferences</span>5 Star</Col> 
          </Row>
        </Container>
        <Container className={styles.suggestedCards}>
          <Row className='align-items-center justify-content-between'>
            
            <Col xs lg="12">
            <Button variant="link" className={styles.createNewItinerary}>Create new itinerary <FontAwesomeIcon icon={faSquarePlus} /> </Button>
            <Tabs
              defaultActiveKey="Itinerary"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Itinerary" title="Suggested Itinerary">
                <Row className="p-4">
                  <Col xs lg="6">
                    <label className="mb-2">From your past Itinerary</label>
                  <CustomItineraryCard />
                  <Button className = "mt-3" variant="outline-primary" size="sm">View All</Button>
                  </Col>
                  <Col xs lg="6">
                    <label className="mb-2">From your master itinerary collection</label>
                  <CustomItineraryCard />
                  <Button className = "mt-3" variant="outline-primary" size="sm">View All</Button>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="Travel Cards" title="Suggested Travel Cards">
              Suggested Travel Cards
            <h1>Work inprogress</h1>
              </Tab>
            </Tabs>
            </Col>
            
          </Row>
        </Container>
        <ViewAllItinerary />
    </div>
  )
}

export default Suggested