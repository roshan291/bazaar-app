 
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import logo from "../../../assets/images/logo.jpg";
const DownloadBill = (props: any) => {
    
   const [rowData, setRowData] = useState([] as any)

   console.log("DownloadBill:", rowData)

   useEffect(() => {
       setRowData(props?.billData?.pdfdata)
   }, [props])

   const { 
    currencyType, 
    paymentMode, 
    customerName, 
    invoieStatus,
    invoiceParticulars, 
    panNummber, 
    gstNummber, 
    billingNote,  
    createdDate,
    id,
    grandTotalAmount,
  } = rowData;

  const styles = StyleSheet.create({
    page: { backgroundColor: '#FFFFFF', padding: '10px' },
    heading:{ fontSize: 25, color: '#ff7315', padding: 30,textAlign:'center' },
    header:{ fontSize: 16, backgroundColor: '#2b3f5d', color: 'white', padding:"25 20" },
    text : { padding: 2, fontSize: 10, textAlign: "justify", color: '#000' },
    static_text: {color: '#979797', padding: 2, fontSize: 10, textAlign: "justify"},
    title_center: {display: 'flex', alignItems: 'center', justifyContent: "center", width: '100%'},
    bottom_line : {backgroundColor: '#4336FB', width: '100%', height: 3, position: 'absolute', top:75, left: 10},
    invoiceDates: {display: 'flex', justifyContent: "space-between", flexDirection: 'row',width: '100%', alignItems:'center', marginBottom: "20px"},
    invoiceDetails: {display: "flex", flexDirection: "row"},
    invoice_wrapper: {width: '25%',display: "flex", flexDirection: "column"},
    textTitle: {fontSize: 14},
    table: {
        // Define any styles you want for the table container
        marginTop: 20,
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#bfbfbf',
        borderBottomStyle: 'solid',
    },
    tableHeaderRow: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        borderBottomStyle: 'solid',
        backgroundColor: '#f2f2f2',
    },
    tableCol: {
        width: '12.5%',  // Adjust this width to fit the number of columns you have
        padding: 5,
        textAlign: 'left',
    },
    tableHeaderCol: {
        width: '12.5%',
        padding: 5,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    tableCell: {
        fontSize: 10,
    },
    tableHeaderCell: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    logo_image: {
        width: 100
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    titleDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    addressDetails: {
        width: '65%', // Adjust the width based on your layout needs
        paddingRight: 10,
    },
    emailDetails: {
        width: '35%', // Adjust the width based on your layout needs
        paddingLeft: 10,
    },
    listItem: {
        marginBottom: 4,
        fontSize: 10,
    },
    grandTotal: {
        textAlign: 'right',
        marginBottom: '25px',
    },
    pageHeader: {
        backgroundColor: '#4336FB', // Green background color
        padding: 2,
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        top:75,
        width: '110%'
    },
    pageFooter: {
        backgroundColor: '#ff7315', // Green background color
        padding: 5,
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '110%',
    },
  });

  const Header = () => (
    <View style={styles.pageHeader}>
    </View>
  );
  
  const Footer = () => (
    <View style={styles.pageFooter}>
    </View>
  );

  return (
    <>
        <Page style={styles.page}>
            <Header />
            <View style={styles.heading}>
                <Text style={styles.title_center}>Invoice</Text> 
            </View>
            <View style={styles.bottom_line}>
                <Text></Text>
            </View>
            <View style={styles.invoiceDates}>
                <View><Image src={logo} style={styles.logo_image} /></View>
                <View>
                    <Text style={styles.static_text}>#ID: <Text style={styles.text}>{id}</Text></Text>
                    <Text style={styles.static_text}>Invoice Date: <Text style={styles.text}>{createdDate}</Text></Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.titleDetails}>
                    <View style={styles.addressDetails}>
                        <Text style={styles.listItem}>Holiday Bazaar</Text>
                        <Text style={styles.listItem}>3rd floor, Nagarjuna Jubilant,</Text>
                        <Text style={styles.listItem}>Himayat Nagar main road, Hyderabad - 500029,</Text>
                        <Text style={styles.listItem}>Telangana, India.</Text>
                        <Text style={styles.listItem}>+91 0888 55 13151</Text>
                        <Text style={styles.listItem}>admin@holidaybazaar.co</Text>
                        <Text style={styles.listItem}>http://holidaybazaar.co</Text>
                    </View>
                    
                    <View style={styles.emailDetails}>
                        {/* <Text style={styles.listItem}>+91 0888 55 13151</Text>
                        <Text style={styles.listItem}>admin@holidaybazaar.co</Text>
                        <Text style={styles.listItem}>http://holidaybazaar.co</Text> */}
                    </View>
                </View>
            </View>
            <View style={styles.invoiceDetails}>
                <View style={styles.invoice_wrapper}>
                    <Text style={[styles.static_text]}>Customer Name</Text>
                    <Text style={[styles.text]}>{customerName}</Text>
                </View>
                <View style={styles.invoice_wrapper}>
                    <Text style={[styles.static_text]}>Currency Type</Text>
                    <Text style={styles.text}>{currencyType}</Text>
                </View>
                <View style={styles.invoice_wrapper}>
                    <Text style={[styles.static_text]}>Payment Mode</Text>
                    <Text style={styles.text}>{paymentMode}</Text>
                </View>
                <View style={styles.invoice_wrapper}>
                    <Text style={[styles.static_text]}>Invoice Status</Text>
                    <Text style={styles.text}>{invoieStatus}</Text>
                </View>
            </View>
            <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableHeaderRow}>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>#</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>Particulars</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>Rate</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>Quantity</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>Discount</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>HSN/SAC</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>GST</Text>
            </View>
            <View style={styles.tableHeaderCol}>
                <Text style={styles.tableHeaderCell}>Amount</Text>
            </View>
        </View>

        {/* Table Rows */}
        {invoiceParticulars?.map((list: any, index: any) => (
            <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{index + 1}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularName}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularRate}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularQuantity}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularDiscount}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularHSN}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularGST}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{list.particularTotalAmount}</Text>
                </View>
            </View>
        ))}
        </View>

        <View style={styles.grandTotal}>
            {
                invoiceParticulars?.length === 0 ? <></> : <Text style={styles.textTitle}>Grand Total : <Text></Text>{grandTotalAmount}</Text>
            }
            
        </View>
        <View>
            <Text style={styles.static_text}>Billing Note</Text>
            <Text style={styles.text}>{billingNote}</Text>
        </View>
        <Footer />
        </Page>
    </>
  )
}

export default DownloadBill