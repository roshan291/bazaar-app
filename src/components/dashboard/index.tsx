import React, { useEffect, useState } from 'react' 
import Button from '../buttons';
import { Container, Row } from 'react-bootstrap';
import CustomTable from '../../pages/customTable.tsx';
import { leadStatus } from '../../constants/global';
import SampleCarousel from '../../pages/sampleCarousel';
import axios from 'axios';
import { navigationURL } from '../../constants';
 


const Dashboard = () => {
  const [leadData, setLeadData] = useState([] as any)
  const [leadStatusData, setLeadStatusData] = useState([] as any)
  useEffect(() => {
    axios.get("http://localhost:8000/createlead").then((response: any) => setLeadData(response?.data))
  }, [])

  console.log("leadDataRow", leadData)

  useEffect(() => {
    const allcount = leadData?.length; 
    const newCount = leadData?.filter((all: any) => all.leadstatus === "New").length;
    const pendingCount = leadData?.filter((all: any) => all.leadstatus === "Pending").length;
    const inprogressCount = leadData?.filter((all: any) => all.leadstatus === "In Progress").length;
    const confirmedCount = leadData?.filter((all: any) => all.leadstatus === "Confirmed").length;
    const completedCount = leadData?.filter((all: any) => all.leadstatus === "Completed").length;
    const cancelledCount = leadData?.filter((all: any) => all.leadstatus === "Cancelled").length;

    // const countData = {
    //   "all": allcount,
    //   "new": newCount,
    //   "pending": pendingCount,
    //   "inprogress": inprogressCount,
    //   "confirmed": confirmedCount,
    //   "completed": completedCount,
    //   "cancelled": CancelledCount,
    // }

    const {
      createLead,
      manageLead,
      dashboard,
      customisedItinerary,
      groupItinerary,
      readyItinerary,
      proformainvoice,
      invoice,
      customerView,
  } = navigationURL;
  
    const countData = [
      {
          id: 1,
          title: "All",
          url: manageLead,
          count: allcount,
      },
      {
          id: 2,
          title: "New",
          url: manageLead,
          count: newCount,
      },
      {
          id: 3,
          title: "Pending",
          url: manageLead,
          count: pendingCount,
      },
      {
          id: 4,
          title: "In Progress",
          url: manageLead,
          count: inprogressCount,
      },
      {
          id: 5,
          title: "Confirmed",
          url: manageLead,
          count: confirmedCount,
      },
      {
          id: 6,
          title: "Completed",
          url: manageLead,
          count: completedCount,
      },
      {
          id: 7,
          title: "Cancelled",
          url: manageLead,
          count: cancelledCount,
      },
  ]
    setLeadStatusData(countData)
  }, [leadData])

  console.log("leadStatusData", leadStatusData)

  return (
    <div className='manage_top_view'>
      {/* <h4>Dashboard</h4> */}
      <Container>
        <Row>
            <div className='col'>
              <CustomTable data = {leadStatusData} title = "Lead" />
            </div>
            <div className='col'>
              <CustomTable data = {leadStatus} title = "Invoice" />
            </div>
            {/* <div className='col'><SampleCarousel /></div> */}
        </Row>
      </Container>
     
     
      {/* <Button variant="secondary" onClick={() => alert('Secondary Button Clicked!')}>
        Cancel
      </Button>
      <Button variant="primary" onClick={() => alert('Primary Button Clicked!')}>
        Submit
      </Button> */}
    </div>
  )
}

export default Dashboard