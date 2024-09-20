import React, { useEffect, useState } from 'react' 
import Button from '../buttons';
import { Container, Row } from 'react-bootstrap';
import CustomTable from '../../pages/customTable.tsx';
import { invoiceStatusCommon, leadStatus } from '../../constants/global';
import SampleCarousel from '../../pages/sampleCarousel';
import axios from 'axios';
import { navigationURL } from '../../constants';
// import invoice from '../billing/invoice';
 


const Dashboard = () => {
  const [leadData, setLeadData] = useState([] as any)
  const [leadStatusData, setLeadStatusData] = useState([] as any)
  const [invoiceData, setInvoiceData] = useState([] as any)
  const [invoiceStatusData, setInvoiceStatusData] = useState([] as any)

  useEffect(() => {
    axios.get("http://localhost:8000/createlead").then((response: any) => setLeadData(response?.data))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8000/createinvoice").then((response: any) => setInvoiceData(response?.data))
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
      all,
      gnerated,
      sentToCustomer,
      partPaid,
      fullyPaid,
      completed,
      canceled,
    } = invoiceStatusCommon

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
          title: "Canceled",
          url: manageLead,
          count: cancelledCount,
      },
    ]
    setLeadStatusData(countData)
  }, [leadData])

  useEffect(() => {
    const allcount = invoiceData?.length; 
    console.log("invoiceData" ,invoiceData)
    const generatedCount = invoiceData?.filter((all: any) => all.invoieStatus === invoiceStatusCommon?.gnerated).length;
    const senttocustomerCount = invoiceData?.filter((all: any) => all.invoieStatus === invoiceStatusCommon?.sentToCustomer).length;
    const partpaidCount = invoiceData?.filter((all: any) => all.invoieStatus ===invoiceStatusCommon?.partPaid).length;
    const fullpaidCount = invoiceData?.filter((all: any) => all.invoieStatus === invoiceStatusCommon?.fullyPaid).length;
    const completedCount = invoiceData?.filter((all: any) => all.invoieStatus === invoiceStatusCommon?.completed).length;
    const cancelledCount = invoiceData?.filter((all: any) => all.invoieStatus === invoiceStatusCommon?.canceled).length;
    const countInvoiceData = [
      {
          id: 1,
          title: "All",
          url: navigationURL?.invoice,
          count: allcount,
      },
      {
          id: 2,
          title: "Generated (Not sent to customer)",
          url: navigationURL?.invoice,
          count: generatedCount,
      },
      {
          id: 3,
          title: "Sent to Customer (Due)",
          url: navigationURL?.invoice,
          count: senttocustomerCount,
      },
      {
          id: 4,
          title: "Part Paid",
          url: navigationURL?.invoice,
          count: partpaidCount,
      },
      {
          id: 5,
          title: "Fully Paid",
          url: navigationURL?.invoice,
          count: fullpaidCount,
      },
      {
          id: 6,
          title: "Completed",
          url: navigationURL?.invoice,
          count: completedCount,
      },
      {
          id: 7,
          title: "Canceled",
          url: navigationURL?.invoice,
          count: cancelledCount,
      },
    ]
    setInvoiceStatusData(countInvoiceData)
  },[invoiceData])
 

  return (
    <div className='manage_top_view'>
      {/* <h4>Dashboard</h4> */}
      <Container>
        <Row>
            <div className='col'>
              <CustomTable data = {leadStatusData} title = "Lead" />
            </div>
            <div className='col'>
              <CustomTable data = {invoiceStatusData} title = "Invoice" />
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