import React, {useState, useEffect} from 'react'
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import accumulatedHeightOfRenderingComponents from "@react-pdf/renderer"
import sizeOfPage from "@react-pdf/renderer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCar } from '@fortawesome/free-solid-svg-icons';
import inclusionImage from "../../assets/images/inclusion.png";
import transportImage from "../../assets/images/transport.png";
import tipsImage from "../../assets/images/tips.png";
import daywiseplanImage from "../../assets/images/daywiseplan1.jpg";
import thankyou from "../../assets/images/thankyou.png";

const Daywiseplan = (props:any) => {
   
   const [rowData, setRowData] = useState([] as any)

    console.log("rowData:", rowData)

    useEffect(() => {
        setRowData(props?.createItinerary?.pdfdata)
    }, [props])

    const {
        id,
        destination,
        customerName,
        serviceList,
        startDate,
        endDate,
        noOfAdults,
        noOfKids,
        coupleList,
        budgetForTrip,
        noOfNights,
        tips,
        otherVisaInformation,
        inclusion,
        exclusion,
        cost,
        termsConditions,
        cancellation,
        dayWisePlanFinal,
    } = rowData;

    const contentDoesNotFit =  accumulatedHeightOfRenderingComponents >= sizeOfPage;

    const styles = StyleSheet.create({
        page: { backgroundColor: '#FFFFFF',flexDirection: 'row', },
        innerTop : { padding: 10 }, 
        inner : { padding: 10, color: '#979797' }, 
        heading:{ fontSize: 30, color: '#5d96e9', padding: 30,textAlign:'center' },
        header:{ fontSize: 16, backgroundColor: '#2b3f5d', color: 'white', padding:"25 20" },
        text : { padding: 2, fontSize: 12, textAlign: "justify", lineHeight:2 },
        summarySectionTop: {position: 'absolute', bottom: 12, left: 0, right: 0},
        summaryinner: { flex: 1, flexDirection: 'column', margin: 20 },
        summarySection: { marginLeft: 10, marginRight: 10, padding: 16, fontSize: 16, backgroundColor:'rgba(135, 206, 235, 0.5)'},
        title: { fontSize : 16 },
        summaryTitle: {fontSize : 24, marginBottom: 10, color: '#ffffff'},
        summarySubTitle: {fontSize : 24, color: '#ffffff', display: 'flex', flexDirection: 'row'},
        summarySubTitleColor: {color: 'yellow', marginLeft: 15},
        // summary: { backgroundColor:'#648dc9',opacity: 0.5, color: 'white', padding: '20 10'},
        flextProp : { display: 'flex', flexDirection: 'row', padding: 10},
        summarytext: { fontSize: 14,opacity: 1, padding: 4, color: 'white' },
        // summarytitle : { fontSize : 16, opacity: 1},
        inclusion: {flex: '0 0 auto', marginLeft: 30, textAlign: 'left', color: 'white' },
        inclusionTitle: {
            textTransform: "uppercase", fontWeight: 'bold', marginBottom: 5, fontSize : 10, textDecoration: "underline"
        },
        inclusionText: { fontSize: 10, padding: 2, color:'white' },
        pageCenter: {
            position: 'relative',
            top: 150,
        },
        summaryDetails: {
            display: 'flex', 
            flexDirection: 'row', 
            padding: 16, 
            backgroundColor:'#0067ff', 
            color: '#ffffff', 
            marginLeft: 10, 
            marginRight: 10,
            fontSize : 14,
        },
        tipsOtherInfo: {
            fontSize : 12,
            padding: 10,
        },
        tipsOtherInfoTitle: {
            color: '#0067ff',
        },
        tipsOtherInfoText: {
            marginTop: 3,
            marginBottom: 10,
            color: '#979797',
        },
        inclusionWrapper: {
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: "wrap",
            width: '100%',
            fontSize : 11,
        },
        transportationDate: {
            fontSize : 18,
            color: '#0067ff',
            textDecoration: 'underline',
            fontWeight: 600,
            letterSpacing: '1px',
            marginTop: 15, 
            marginLeft: 15, 
            marginBottom: 10,
            textDecorationStyle: 'dotted'
        },
        transportationTitle: {
            fontSize : 12,
            color: '#e7505a',
            marginLeft: 10,
        },
        transportationTitleWrapper: {
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            fontSize : 12,
            color: '#e7505a',
            marginLeft: 30, 
        },
        transportationDetails: {
            display: 'flex', 
            flexDirection: 'row',  
            color: '#979797',
            fontSize : 12,
            marginLeft: 40, 
            marginTop: 10, 
            justifyContent: "space-between"
        },
        transportationDetailsInner: {
            display: 'flex', 
            flexDirection: 'column',  
        },
        transportationDetailsInnerTitle: {
            color: '#000000',  
            marginRight: 5,
        },
        leftColumn: {
            width: '50%',
          },
        rightColumn: {
            width: '50%',
        },
        summaryleftColumn: {
            width: '40%',
          },
        summaryrightColumn: {
            width: '60%',
        },
        image: {
            height: 130,
        },
      });

      const getTransportationType = () => {
        return <FontAwesomeIcon icon={faCar} />
      }

      const transportationData =  dayWisePlanFinal?.map((item: any) => item.transportation);
      console.log("transportationData", transportationData, transportationData?.map((list: any) => list.startingPoint))

  return (
    <>
        <Page style={styles.page}>
            <View style={styles.summarySectionTop}>
             <View style={styles.summarySection}>
                <Text style={styles.summaryTitle}>{destination}</Text>
                <View style={styles.summarySubTitle}><Text >For</Text><Text style={styles.summarySubTitleColor}>{customerName}</Text></View>
             </View>
             <View style={styles.summaryDetails}>
                    <View style={styles.summaryleftColumn}>
                        <Text>{noOfNights - 1} Days and {noOfNights} Nights</Text>
                        <Text>INR {budgetForTrip} {coupleList} Budget / Cost</Text>
                        <Text>{noOfAdults} Persons and {noOfKids} Kids</Text>
                        <Text>{startDate} To {endDate}</Text> 
                    </View>
                    <View style={styles.summaryrightColumn}>
                        <Text style={styles.inclusionTitle}>Inclusion</Text>
                        <View style={styles.inclusionWrapper}>
                            {
                                serviceList?.filter((item:any) => item.isChecked)?.map((list: any) => <>
                                <Text style={styles.leftColumn}>- {list.serviceName}</Text>
                                </>)
                            }
                        </View>
                    </View>
             </View>
            </View>
        </Page>
        <Page>
            <View style={styles.inner}>
                <View style={styles.pageCenter}>
                    <Text style={styles.text}>Dear {customerName}, </Text>
                    <Text style={styles.text}>Greetings from Holiday Bazaar, and we hope you are well! </Text>
                    <Text style={styles.text}>Thank you for choosing our service. After speaking with you, we started planning for your best holiday experience possible, and
                    have carefully put together a package based on your speci'c preferences. Please refer to the below information, and let us know if
                    you would like to make any further amendments.
                    </Text>
                    <Text style={styles.text}>Holiday Bazaar has been helping to transform travelers overseas trips into unforgettable experiences for years, and our goal is to do
                    the same for you. Here’s to a wonderful vacation ahead!</Text>
                </View>
            </View>
        </Page>
        <Page>
            <View style={styles.innerTop}>
                <Image src={daywiseplanImage} style={styles.image} />
                
            </View>
        </Page>
        <Page>
            <View style={styles.innerTop}>
                <Image src={transportImage} style={styles.image} />
                {
                    transportationData?.map((list: any) => <>
                        <Text style={styles.transportationDate}>{list.departDate}</Text>
                        <View style={styles.transportationTitleWrapper}>
                            <Text>{getTransportationType()}</Text><Text style={styles.transportationTitle}>{list.transpotationMode} From {list.startingPoint}</Text>
                        </View>
                    </>
                    )
                }
                
                <View style={styles.transportationDetails} >
                    <View style={styles.leftColumn}>
                        <View style={styles.transportationDetailsInner}>
                            {
                                transportationData?.map((list: any) => <>
                                    <Text style={styles.transportationDetailsInnerTitle}>From:</Text><Text>{list.startingPoint}, {list.departingCity}, {list.departingCountry}</Text>
                                    <Text style={styles.transportationDetailsInnerTitle}>Transportation Mode:</Text><Text>{list.transpotationMode}</Text>
                                    <Text style={styles.transportationDetailsInnerTitle}>Actual Departure Time:</Text><Text>{list.actualDepartureTime}</Text>
                                    <Text style={styles.transportationDetailsInnerTitle}>Reporting Time:</Text><Text>{list.reportingTime}</Text>
                                </>)
                            }
                        </View>
                        
                    </View>
                    <View style={styles.rightColumn}> 
                        <View style={styles.transportationDetailsInner}>
                            {
                                transportationData?.map((list: any) => <>
                                    <Text style={styles.transportationDetailsInnerTitle}>To:</Text><Text>{list.endingPoint}, {list.arrivalCity}, {list.arrivalCountry}</Text>
                                    <Text style={styles.transportationDetailsInnerTitle}>Actual Arrival Time:</Text><Text>{list.actualArrivalTime}</Text>
                                    <Text style={styles.transportationDetailsInnerTitle}>Arrival Date:</Text><Text>{list.arrialDate}</Text>
                                    <Text style={styles.transportationDetailsInnerTitle}>Transportation Note:</Text><Text>{list.transpotationNote}</Text>
                                </>)
                            }
                        </View>
                    </View>
                </View>
            </View>

        </Page>
        <Page>
            <View style={styles.innerTop}>
                <Image src={inclusionImage} style={styles.image} />
            </View>
            <View style={styles.tipsOtherInfo}>
                <Text style={styles.tipsOtherInfoTitle}>Inclusion: </Text>
                <Text style={styles.tipsOtherInfoText}>{inclusion}</Text>
                <Text style={styles.tipsOtherInfoTitle}>Exclusion: </Text>
                <Text style={styles.tipsOtherInfoText}>{exclusion}</Text>
                <Text style={styles.tipsOtherInfoTitle}>Cost: </Text>
                <Text style={styles.tipsOtherInfoText}>{cost}</Text>
                <Text style={styles.tipsOtherInfoTitle}>Terms & Conditions: </Text>
                <Text style={styles.tipsOtherInfoText}>{termsConditions}</Text>
                <Text style={styles.tipsOtherInfoTitle}>Cancellation: </Text>
                <Text style={styles.tipsOtherInfoText}>{cancellation}</Text>
            </View>
        </Page>
        <Page>
            <View style={styles.innerTop}>
                <Image src={tipsImage} style={styles.image} />
            </View>
            <View style={styles.tipsOtherInfo}>
                <Text style={styles.tipsOtherInfoTitle}>Tips: </Text>
                <Text style={styles.tipsOtherInfoText}>{tips}</Text>
                <Text style={styles.tipsOtherInfoTitle}>Others / Visa Information: </Text>
                <Text style={styles.tipsOtherInfoText}>{otherVisaInformation}</Text>
            </View>
        </Page>
        <Page>
            <View style={styles.innerTop}>
                <Image src={thankyou} style={styles.image} />
                <View style={styles.inner}>
                    <Text style={styles.text}>Thank you.</Text>
                    <Text style={styles.text}>
                    We believe the above provided is according to your speci'ed requirements, and hope that the information will be helpful
                    for your holiday plans. For travelers who wish to ensure they are well covered for any incidents, Holiday Bazaar also offers
                    a wide range of travel insurance solutions and services, which can be customized based on individual needs and
                    preferences.
                    </Text>
                    <Text style={styles.text}>For any clarification or further information at all regarding the above, please do not hesitate to call or email us directly.</Text>
                </View> 
            </View>
        </Page>
    </>
  )
}

export default Daywiseplan