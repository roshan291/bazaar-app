import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faFileLines, faFileCircleXmark, faSquarePen, faFileMedical, faNoteSticky, faFileImage, faSquareH, faHotel, faClipboard, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
export const pleaseSelect = "- Please select -";
export const startDate = "Start Date";
export const endDate = "End Date";
export const pleaseEnterText = "Please enter text";
export const pleaseEnterEmail = "name@domain.com";
export const pleaseEnterNumber = "Please enter number";
export const notApplicable = "N/A";

export const selectRequirement = [
    "FIT (Customised) Tour Package",
    "Group Tour Package",
    "Hotel Stay",
    "Cab Service / Pick Up & Drop",
    "Flights",
    "Train",
    "Forex",
    "Visa",
];

export const dropdownPlaceholder = {
    selectCountry: "Select Country",
}

export const leadStatus = [
    "All",
    "New",
    "Pending",
    "In Progress",
    "Confirmed",
    "Completed",
    "Canceled", 
]

export const itineraryStatus = [
    "In Progress",
    "New",
    "Completed Tour",
    "Sent to customer",
    "Confirmed",
    "Rejected / Cancel",
]

export const changeLeadStatus = [
    "New",
    "Pending",
    "Inprogress",
    "Confirmed",
    "Completed",
    "Canceled", 
]

export const selectRequirementDefault = {
    fItTourPackage: "FIT (Customised) Tour Package",
    groupTourPackage: "Group Tour Package",
    hotelStay : "Hotel Stay",
    cabServicePickUpandDrop: "Cab Service / Pick Up & Drop",
    flights: "Flights",
    train: "Train",
    forex: "Forex",
    visa: "Visa",
};

export const createNewCustomer = [
    "Syed Roshan",
    "Mahesh Babu",
    "Raghavendra",
    "Nayanatara",
];

export const selectCouple = [
    "Per Person",
    "Couple"
]

export const selectWelcomeNote = [
    "Welcome Note 1",
    "Welcome Note 2",
    "Welcome Note 3",
    "Welcome Note 4",
    "Welcome Note 5",
    "Welcome Note 6",
    "Welcome Note 7",
    "Welcome Note 8",
    "Welcome Note 9",
    "Welcome Note 10", 
]

export const selectThankyouNote = [
    "Thankyou Note 1",
    "Thankyou Note 2",
    "Thankyou Note 3",
    "Thankyou Note 4",
    "Thankyou Note 5",
    "Thankyou Note 6",
    "Thankyou Note 7",
    "Thankyou Note 8",
    "Thankyou Note 9",
    "Thankyou Note 10", 
]

export const selectMeal = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Evening Snacks",
]

export const leadsChild = ["Create New Lead", "Manage Leads"];
export const itineraryChild = ["Customized Itinerary", "Group Itinerary", "Ready Itinerary"];
export const invoiceChild = ["My Customers", "Proforma Invoice", "Invoice"];
export const toolsChild = ["Website Builder", "Travel Flyer", "Setup Common Feedback Form", "View All Feedback"];
export const helpChild = ["+91 9727338866"]

export const navigationConstant = [ "Dashboard", "Leads", "My Itinerary", "Customer & Billing", "Hotels", "Tools", "Help"]

export const selectToastMessage = {
    success: "Success",
    failed: "Failed",
    successMessage: "Request sumitted successful.",
    failedMessage: "Request failed to sumitted."
}

export const modeOfPayment = [
    "Cash",
    "Cheque",
    "RTGS / NEFT / IMPS",
    "Payment Gateway", 
]

export const selectServiceIncluded = [
    "Airfare",
    "Internal Transportation",
    "Hotel Stay",
    "Sightseeing",
    "Visa Fees",
    "Government Tax",
    "Surcharge",
    "Cruise Stay",
    "Free Goodies",
    "APAI - Stay & All Meals",
    "Passport Fees",
    "CP - Stay & Breakfast",
    "Tour Manager",
    "MAP - Stay, Breakfast & Dinner",
]

export const selectServiceIncludedObj = [
    {id: 1, isChecked: "false", serviceName: "Airfare"},
    {id: 2, isChecked: "false", serviceName: "Internal Transportation"},
    {id: 3, isChecked: "false", serviceName: "Hotel Stay"},
    {id: 4, isChecked: "false", serviceName: "Sightseeing"},
    {id: 5, isChecked: "false", serviceName: "Visa Fees"},
    {id: 6, isChecked: "false", serviceName: "Government Tax"},
    {id: 7, isChecked: "false", serviceName: "Surcharge"},
    {id: 8, isChecked: "false", serviceName: "Cruise Stay"},
    {id: 9, isChecked: "false", serviceName: "Free Goodies"},
    {id: 10, isChecked: "false", serviceName: "APAI - Stay & All Meals"},
    {id: 11, isChecked: "false", serviceName: "Passport Fees"},
    {id: 12, isChecked: "false", serviceName: "CP - Stay & Breakfast"},
    {id: 13, isChecked: "false", serviceName: "Tour Manager"},
    {id: 14, isChecked: "false", serviceName: "MAP - Stay, Breakfast & Dinner"},
]

export const selectHotelPreferences = [
    "1 Star",
    "2 Star",
    "3 Star",
    "4 Star",
    "5 Star",
]

export const navigationURL = {
    createLead: "/lead/create",
    manageLead: "/lead/manageLead",
    updateLead: "/lead/update",
    suggestedLead: "",
    viewAllItinerary: "",
    createItinerary: "/itinerary/create",
    customisedItinerary: "/itinerary/customised",
    groupItinerary: "/itinerary/group",
    readyItinerary: "/itinerary/ready",
    invoice: "/invoice",
    createinvoice: "/invoice/create",
    proformainvoice: "/invoice/proforma",
    dashboard: "/",
    customerView : "/customer",
}

export const manageLeadSideNavMoreList = [
    {
        navTitle: "Edit Lead",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileLines} /> 
    },
    {
        navTitle: "Remove Lead",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileCircleXmark} /> 
    },
    {
        navTitle: "Change Lead Status",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faSquarePen} /> 
    },
    {
        navTitle: "Add New Itinerary",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileMedical} /> 
    },
    {
        navTitle: "View Itinerary",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faNoteSticky} /> 
    },
    {
        navTitle: "Add new Flyer",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileImage} />
    },
    {
        navTitle: "View Travel Flyer",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faClipboard} />
    },
    {
        navTitle: "Hotels",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faSquareH} />  
    },
    {
        navTitle: "Hotel Vouchers",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faHotel} /> 
    },
    {
        navTitle: "Documents",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faClipboardList} />
    },
    {
        navTitle: "Invoices",
        navigateURL: "",
        icon: <FontAwesomeIcon icon={faFileInvoice} />
    }
]

export const selectVehicleType = [                      
    "Airplane",                    
    "Auto",                    
    "Boat",                    
    "Bus",                    
    "Bus (12 Seater)",                    
    "Bus (20 Seater)",                    
    "Bus (34 Seater)",                    
    "Bus (36 Seater)",                    
    "Bus (45 Seater)",                    
    "Bus (49 Seater)",                    
    "By Cycle",                    
    "Car (Indica or Equivalent 4 Seater)",                    
    "Car (Innova or Equivalent 6 Seater)",                    
    "Car (Swift Dzire or Equivalent 4 Seater)",                    
    "Car (Tavera or Equivalent 7 Seater)",                    
    "Car - Normal Sedan",                    
    "Coach (SIC)",                    
    "Cruise",                    
    "Ferry",                    
    "Helicopter",                    
    "Longtail Boat",                    
    "Metro",                    
    "Mini Bus",                    
    "Mini Van",                    
    "Motorcycle",                    
    "Premium Car",                    
    "Rup Way",                    
    "Speed Boat",                    
    "Suv (Big Car)",                    
    "Tempo Traveller (12 Seater)",                    
    "Tempo Traveller (14 Seater)",                    
    "Tempo Traveller (17 Seater)",                    
    "Tempo Traveller (19 Seater)",                    
    "Tempo Traveller (26 Seater)",                    
    "Tempo Traveller (9 Seater)",                    
    "Train",                    
    "Tuk Tuk",                    
    "Van",                    
    "Walk",                    
    "Water Crafts",                    
]

export const selectTrainClass = [
    "First Class",
    "AC First Class",
    "AC 2-Tier",
    "AC 3-Tier",
    "AC Chair Car",
    "Sleeper",
    "Second Sitting",
]

export const selectCurrency = [
    "INR (Indian rupee)",
    "USD (United States dollar)",
    "EUR (European euro)",
    "AUD (Australian dollar)",
    "NZD (New Zealand dollar)",
    "AED (UAE dirham)",
    "GBP (Pound sterling)",
    "CAD (Canadian dollar)",
    "CNY (Chinese Yuan Renminbi)",
    "OMR (Omani rial)",
    "RUB (Russian ruble)",
    "SGD (Singapore dollar)",
    "CHF (Swiss franc)",
    "NPR (Nepal)",
    "THB (Thai Baht)",
    "MAD (Moroccan dirham)",
    "RAND (South African Rand)",
]

export const selectTypeOfHoliday = [
    "Adventure / Camping",
    "Beach / Hill Stations",
    "Corporate / Event",
    "Cruise",
    "Family / Leisure",
    "Nature / Safari / Wildlife",
    "Pilgrimage",
    "Rejuvenate / Meditation / Spa",
    "Romantic / Honeymoon",
    "Short Breaks",
    "Theme Park / Amusement Park",
    "Others",
]

