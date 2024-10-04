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
import tickMarkIcon from "../../assets/icons/tick-check-mark.webp"
import pageBanner from "../../assets/images/travells.jpg"
import Transportation from './transportation';

const Daywiseplan = (props:any) => {
   
   const [rowData, setRowData] = useState([] as any)
 

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
        welcomenote,
        thankyounote
    } = rowData;

    const contentDoesNotFit =  accumulatedHeightOfRenderingComponents >= sizeOfPage;

    const styles = StyleSheet.create({
        page: { backgroundColor: '#FFFFFF',flexDirection: 'row'},
        innerTop : { padding: 10 }, 
        inner : { padding: 10, color: '#979797' }, 
        heading:{ fontSize: 30, color: '#5d96e9', padding: 30,textAlign:'center' },
        header:{ fontSize: 16, backgroundColor: '#2b3f5d', color: 'white', padding:"25 20" },
        text : { padding: 2, fontSize: 12, textAlign: "justify", lineHeight:2 },
        summarySectionTop: {position: 'absolute', bottom: 12, left: 0, right: 0},
        summaryinner: { flex: 1, flexDirection: 'column', margin: 20 },
        summarySection: { marginLeft: 10, marginRight: 10, padding: 16, fontSize: 16, backgroundColor:'rgba(135, 206, 235, 0.5)'},
        title: { fontSize : 16 },
        summaryTitle: {fontSize : 24, marginBottom: 10, color: '#0d6efd'},
        summarySubTitle: {fontSize : 24, color: '#0d6efd', display: 'flex', flexDirection: 'row'},
        summarySubTitleColor: {color: '#ff7315', marginLeft: 10},
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
            fontSize : 11,
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
            fontSize : 11,
            color: '#e7505a',
            marginLeft: 10,
        },
        transportationTitleWrapper: {
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent:"space-between",
            fontSize : 11,
            color: '#e7505a',
            marginLeft: 30, 
        },
        transportationDetails: {
            display: 'flex', 
            flexDirection: 'row',  
            color: '#979797',
            fontSize : 11,
            marginLeft: 40, 
            marginTop: 10, 
            justifyContent: "space-between"
        },
        transportationDetailsInner: {
            display: 'flex', 
            flexDirection: 'column',  
        },
        transportationDetailsTop: {
            color: '#979797',  
            marginRight: 5,
        },
        transportationDetailsTitle: {
            marginTop: 5,
            fontSize : 14,
            color: '#0d6efd', 
        },
        transportationDetailsInnerTitle: {
            color: '#000000',  
            marginRight: 5,
            marginBottom: 2,
        },
        transportationDetailsInnerTitleBottom: {
            color: '#000000',  
            marginRight: 5,
            marginBottom: 15,
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
        daywiseplanday: {
            marginTop: 5,
            fontSize : 11,
            color: '#ff7315', 
            marginLeft: 30, 
        },
        daywiseTitle: {
            marginTop: 10,
            fontSize : 11,
            color: '#0d6efd', 
            marginLeft: 30,  
        },
        daywiseMealTitle: {
            marginBottom: 10,
            marginTop: 10,
            fontSize : 11,
            color: '#0d6efd', 
            marginLeft: 30, 
        },
        dot: {
            backgroundColor: "red",
            width: 4,
            height: 4,
            borderRadius: 30,
            left: 5,
            top: 4,
            position: "absolute"
        },
        hotelDetails: {
            fontSize : 11,
            marginLeft: 25, 
        },
        listColor: {
            color: '#000',  
            marginLeft: 5,
        },
        listColorLabel: {
            color: '#535252',  
            marginLeft: 5,
            display: "flex",
            alignItems:"center",
        },
        customerNameStyle: {
            color: '#0d6efd',
        },
        customerNameStyleOrange: {
            color: '#ff7315'
        },
        pageBannerimage: {
            marginLeft: 3
        }
      });

      const getTransportationType = () => {
        return <FontAwesomeIcon icon={faCar} />
      }

      const hasNonEmptyValues = (item: any) => {
        return Object.keys(item).some((key) => {
          // Check if the value is an array and has length > 0 or if it is a string or number and not empty
          const value = item[key];
          return Array.isArray(value) ? value.length > 0 : value;
        });
      };

      const transportationData =  dayWisePlanFinal?.map((item: any) => item?.transportation?.length > 0 && item.transportation); 
      const filteredDayWisePlan = dayWisePlanFinal?.filter((item: any) => hasNonEmptyValues(item));
    //   console.log("transportationData 1", filteredDayWisePlan)

      const renderTransportData = (list: any) => {
        return (
            <>
                {
                    !!list ? (
                        <View style={styles.transportationDetails}>
                            <View style={styles.leftColumn}>
                                <View style={styles.transportationDetailsInner}>
                                    {
                                        !!list ? list?.map((list: any) => <>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Transportation Title: <Text style={styles.transportationDetailsTop}>{!!list?.transportationTitle ? list?.transportationTitle : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Departing Country: <Text style={styles.transportationDetailsTop}>{!!list?.departingCountry ? list?.departingCountry : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Departing City: <Text style={styles.transportationDetailsTop}>{!!list?.departingCity ? list?.departingCity : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Starting Point: <Text style={styles.transportationDetailsTop}>{!!list?.startingPoint ? list?.startingPoint : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            DepartDate: <Text style={styles.transportationDetailsTop}>{!!list?.departDate ? list?.departDate : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Actual Departure Time: <Text style={styles.transportationDetailsTop}>{!!list?.actualDepartureTime ? list?.actualDepartureTime : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitleBottom}>
                                            Reporting Time: <Text style={styles.transportationDetailsTop}>{!!list?.reportingTime ? list?.reportingTime : "--"}</Text>
                                        </Text>
                                        </>) : <></>
                                    }
                                    
                                </View>
                            </View>
                            <View style={styles.rightColumn}>
                                <View style={styles.transportationDetailsInner}>
                                {
                                        !!list ? list?.map((list: any) => <>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Transportation Mode: <Text style={styles.transportationDetailsTop}>{!!list?.transpotationMode ? list?.transpotationMode : "--"}</Text>
                                        </Text>
                                        
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Arrival Country: <Text style={styles.transportationDetailsTop}>{!!list?.arrivalCountry ? list?.arrivalCountry : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Arrival City: <Text style={styles.transportationDetailsTop}>{!!list?.arrivalCity ? list?.arrivalCity : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Ending Point: <Text style={styles.transportationDetailsTop}>{!!list?.endingPoint ? list?.endingPoint : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Arrival Date: <Text style={styles.transportationDetailsTop}>{!!list?.arrialDate ? list?.arrialDate : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitle}>
                                            Actual Arrival Time: <Text style={styles.transportationDetailsTop}>{!!list?.actualArrivalTime ? list?.actualArrivalTime : "--"}</Text>
                                        </Text>
                                        <Text style={styles.transportationDetailsInnerTitleBottom}>
                                            Transportation Note: <Text style={styles.transportationDetailsTop}>{!!list?.transpotationNote ? list?.transpotationNote : "--"}</Text>
                                        </Text>
                                        </>) : <></>
                                    }
                                </View>
                            </View>
                        </View>
                    ) : (
                        <></>
                    )
                }
            </>
        );
      };
    
      const renderDayWiseDescription = (descriptions: any) => {
        // console.log("Rendering descriptions:", descriptions); // Debug log

        return (
            <View>
                <Text style={styles.daywiseTitle}>Day Description</Text>
                {descriptions.map((item: any, index: number) => (
                    <View key={index} style={{ marginTop: 10, fontSize: 10, marginLeft: 30 }}>
                        <Text>Day Title: {item.dayTitleText}</Text>
                        <Text>Day Description: {item.dayDescriptionText}</Text>
                    </View>
                ))}
            </View>
        );
    };
     const renderMeals = (meals: any) => {
        // console.log("Rendering meals:", meals); // Debug log
        return (
            <View>
                 <Text style={styles.daywiseMealTitle}>Meal Details</Text>
                {meals.map((meal: any, index: number) => (
                    <View key={index} style={{ marginBottom: 10, fontSize: 10, marginLeft: 30 }}>
                        <Text>Meal Title: {meal.mealTitle}</Text>
                        <Text>Meal Description: {meal.mealDescription}</Text>
                        <Text style={{marginTop: 5}}>Selected Meals:</Text>
                        {meal.selecdtMeal.filter((m: any) => m.isChecked).map((selected: any) => (
                            <View>
                                <Text style={styles.dot}></Text><Text key={selected.id} style={{ paddingLeft: 15 }}>
                                {selected.selectMealType}
                            </Text>
                            </View>
                            
                        ))}
                    </View>
                ))}
            </View>
        );
    };

    const renderHotel = (hotels: any) => {
        // console.log("Rendering hotel:", hotels);
        return (
            <View>
                <Text style={styles.daywiseMealTitle}>Hotel Details</Text>
                {
                    hotels?.map((hotel: any) =>(
                        <View style={styles.hotelDetails}>
                            <Text style={styles.listColorLabel}>Hotel check-In Date & Time: <Text style={styles.listColor}>{hotel?.checkInDate}, {hotel?.checkInTime}</Text></Text>
                            <Text style={styles.listColorLabel}>Audus: <Text style={styles.listColor}>{hotel?.adults}</Text></Text>
                            <Text style={styles.listColorLabel}>Chilldrens: <Text style={styles.listColor}>{hotel?.childs}</Text></Text>
                            <Text style={styles.listColorLabel}>Rooms: <Text style={styles.listColor}>{hotel?.rooms}</Text></Text>
                            <Text style={styles.listColorLabel}>Room Type: <Text style={styles.listColor}>{hotel?.roomTypes}</Text></Text>
                            <Text style={styles.listColorLabel}>Extra Bed: <Text style={styles.listColor}>{hotel?.extrabed}</Text></Text>
                            <Text style={styles.listColorLabel}>Number of Nights: <Text style={styles.listColor}>{hotel?.numberOfNights}</Text></Text>
                            <Text style={styles.listColorLabel}>Note: <Text style={styles.listColor}>{hotel?.noteText}</Text></Text>
                        </View>
                    ))
                }
            </View>
        )

    }
    const renderDayWisePlan = (list: any, index: any) => {
    // console.log("renderDayWisePlan", list)
    return (
        <>
            <Text key={index} style={styles.daywiseplanday}>{list?.day}</Text>
            <View>
                {
                    list?.description && list?.description?.length > 0 && renderDayWiseDescription(list?.description)
                }
            </View>
            <View>
                {
                    list?.meal && list?.meal?.length > 0 && renderMeals(list?.meal)
                }
            </View>
            <View>
                {
                    list?.hotel && list?.hotel?.length > 0 && renderHotel(list?.hotel)
                }
            </View>
        </>
    )
    }

  return (
    <>
        <Page style={styles.page}>
            <Image src={pageBanner} style={styles.pageBannerimage} />
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
                    <Text style={styles.text}>Dear <Text style={styles.customerNameStyleOrange}>{customerName}</Text>,</Text>
                    <Text style={styles.text}>Greetings from <Text style={styles.customerNameStyle}>Holiday Bazaar</Text>, and we hope you are well! </Text>
                    <Text style={styles.text}>Thank you for choosing our service. After speaking with you, we started planning for your best holiday experience possible, and
                    have carefully put together a package based on your speci'c preferences. Please refer to the below information, and let us know if
                    you would like to make any further amendments.
                    </Text>
                    <Text style={styles.text}><Text style={styles.customerNameStyle}>Holiday Bazaar</Text> has been helping to transform travelers overseas trips into unforgettable experiences for years, and our goal is to do
                    the same for you. Here’s to a wonderful vacation ahead!</Text>
                </View>
            </View>
        </Page>
        {
            filteredDayWisePlan?.length > 0 && (
            <Page>
                <View style={styles.innerTop}>
                    <Image src={daywiseplanImage} style={styles.image} />
                </View>
                <View>
                    {filteredDayWisePlan.map((list: any, index: number) => renderDayWisePlan(list, index))}
                </View>
            </Page>
            )
        }
        {
            transportationData?.length > 0 ?
            <Page>
            <View style={styles.innerTop}>
                <Image src={transportImage} style={styles.image} />
            </View>
            <View style={styles.transportationDetails} >
                <View style={styles.leftColumn}>
                    <View style={styles.transportationDetailsInner}> 
                        <Text style={styles.transportationDetailsTitle}>Departing Information (From)</Text>
                    </View>
                </View>
                <View style={styles.rightColumn}> 
                    <View style={styles.transportationDetailsInner}> 
                    <Text style={styles.transportationDetailsTitle}>Arrival Information (To)</Text>
                    </View>
                </View>
            </View>
            <View>
                {
                    transportationData?.map((list: any) => renderTransportData(list))
                }
            </View>
        </Page> : <></>
        }
        
        {
            !!inclusion || !!exclusion || !!cost || !!termsConditions || !!cancellation ? 
            <Page>
                <View style={styles.innerTop}>
                    <Image src={inclusionImage} style={styles.image} />
                </View>
                <View style={styles.tipsOtherInfo}>
                    <Text style={styles.tipsOtherInfoTitle}>Inclusion: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!inclusion ? inclusion : "--"}</Text>
                    <Text style={styles.tipsOtherInfoTitle}>Exclusion: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!exclusion ? exclusion : "--"}</Text>
                    <Text style={styles.tipsOtherInfoTitle}>Cost: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!cost ? cost : "--"}</Text>
                    <Text style={styles.tipsOtherInfoTitle}>Terms & Conditions: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!termsConditions ? termsConditions : "--"}</Text>
                    <Text style={styles.tipsOtherInfoTitle}>Cancellation: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!cancellation ? cancellation : "--"}</Text>
                </View>
            </Page>
            : <></>
        }
        {
            !!tips || !!otherVisaInformation ? 
            <Page>
                <View style={styles.innerTop}>
                    <Image src={tipsImage} style={styles.image} />
                </View>
                <View style={styles.tipsOtherInfo}>
                    <Text style={styles.tipsOtherInfoTitle}>Tips: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!tips ? tips : "--"}</Text>
                    <Text style={styles.tipsOtherInfoTitle}>Others / Visa Information: </Text>
                    <Text style={styles.tipsOtherInfoText}>{!!otherVisaInformation ? otherVisaInformation : "--"}</Text>
                </View>
            </Page>
        : <></>
        }
        
        <Page>
            <View style={styles.innerTop}>
                <Image src={thankyou} style={styles.image} />
                <View style={styles.inner}>
                    <Text style={styles.text}>Thank you.</Text>
                    <Text style={styles.text}>
                    We believe the above provided is according to your speci'ed requirements, and hope that the information will be helpful
                    for your holiday plans. For travelers who wish to ensure they are well covered for any incidents, <Text style={styles.customerNameStyle}>Holiday Bazaar</Text> also offers
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