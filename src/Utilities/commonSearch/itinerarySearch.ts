export const itinerarySearch = (item: any, query: any) => {
    const search = item?.customerName?.toLowerCase().includes(query.toLowerCase()) || item?.itineraryTitle?.toLowerCase().includes(query.toLowerCase()) || item?.budgetForTrip?.toLowerCase().includes(query.toLowerCase()) || item?.mobileNumber?.toLowerCase().includes(query.toLowerCase()) || item?.id?.toLowerCase().includes(query.toLowerCase()) || item?.dateOfIssue?.toLowerCase().includes(query.toLowerCase());
    return search;
}

export const itineraryStatusFilter = (item: any, query: any) => {
    if(query === "All") {
        return item;
    } else {
        const filterStatus = item?.changestatus?.toLowerCase() === query?.toLowerCase();
        return filterStatus;
    }  
}

export const leadStatusFilter = (item: any, query: any) => {
    console.log("leadStatusFilter item", item, query)
    const leadFilter = item.leadstatus?.toLowerCase() === query?.toLowerCase();
    return leadFilter;
}

 
export const leadSearch = (item: any, query: any) => {
    const search = item?.customerName?.toLowerCase().includes(query.toLowerCase()) || item?.typeOfHoliday?.toLowerCase().includes(query.toLowerCase()) || item?.budgetForTrip?.toLowerCase().includes(query.toLowerCase()) || item?.mobileNumber?.toLowerCase().includes(query.toLowerCase()) || item?.id?.toLowerCase().includes(query.toLowerCase()) || item?.dateOfIssue?.toLowerCase().includes(query.toLowerCase()) || item?.leadTitle?.toLowerCase().includes(query.toLowerCase())|| item?.leadstatus?.toLowerCase().includes(query.toLowerCase())|| item?.getRequirement?.toLowerCase().includes(query.toLowerCase())|| item?.destination?.toLowerCase().includes(query.toLowerCase())|| item?.coupleList?.toLowerCase().includes(query.toLowerCase())|| item?.paymentmode?.toLowerCase().includes(query.toLowerCase())|| item?.typeOfHoliday?.toLowerCase().includes(query.toLowerCase())|| item?.shortNote?.toLowerCase().includes(query.toLowerCase())|| item?.startDate?.toLowerCase().includes(query.toLowerCase())|| item?.endDate?.toLowerCase().includes(query.toLowerCase())|| item?.dropPoint?.toLowerCase().includes(query.toLowerCase())|| item?.groupTourPackageList?.toLowerCase().includes(query.toLowerCase());
    return search;
}


export const invoiceSearch = (item: any, query: any) => {
    const search = item?.currencyType?.toLowerCase().includes(query.toLowerCase()) || item?.customerName?.toLowerCase().includes(query.toLowerCase()) || item?.invoiceId?.toLowerCase().includes(query.toLowerCase()) || item?.invoieStatus?.toLowerCase().includes(query.toLowerCase()) || item?.createdDate?.toLowerCase().includes(query.toLowerCase());
    return search;
}

export const invoiceStatusFilter = (item: any, query: any) => {
    console.log("leadStatusFilter item", item, query)
    if(query === "All") {
        return item;
    } else {
        const leadFilter = item.invoieStatus?.toLowerCase() === query?.toLowerCase();
        return leadFilter;
    }
}