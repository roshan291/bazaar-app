export const EndpointsURL = {
    create_lead: "lead/create",
    update_lead: "lead/update",
    delete_lead: "lead/delete",
    view_lead: "lead/view",
    create_customer: "customer/create",
    update_customer: "customer/update",
    delete_customer: "customer/delete",
    view_customer: "customer/view",
    create_itinerary: "itinerary/create",
    update_itinerary: "itinerary/update",
    delete_itinerary: "itinerary/delete",
    view_itinerary: "itinerary/view",
    create_invoice: "invoice/create",
    update_invoice: "invoice/update",
    delete_invoice: "invoice/delete",
    view_invoice: "invoice/view",
}

export const Endpoints = {
    createlead: "/createlead",
    createinvoice: "/createinvoice",
}


// import React, { useState, useEffect } from 'react';
// import { _get, _post, _put, _delete } from './apiClient'; // Adjust the path as needed

// function ExampleComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data when component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await _get('/data', { headers: { Authorization: 'Bearer your_token_here' } });
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle errors
//     }
//   };

//   const addData = async () => {
//     try {
//       const newData = { name: 'New Item' };
//       await _post('/data', newData);
//       fetchData(); // Refresh data after adding
//     } catch (error) {
//       console.error('Error adding data:', error);
//       // Handle errors
//     }
//   };

//   const updateData = async (id, updatedData) => {
//     try {
//       await _put(`/data/${id}`, updatedData);
//       fetchData(); // Refresh data after updating
//     } catch (error) {
//       console.error('Error updating data:', error);
//       // Handle errors
//     }
//   };

//   const deleteData = async (id) => {
//     try {
//       await _delete(`/data/${id}`);
//       fetchData(); // Refresh data after deleting
//     } catch (error) {
//       console.error('Error deleting data:', error);
//       // Handle errors
//     }
//   };

//   return (
//     <div>
//       <h1>Example Component</h1>
//       <button onClick={addData}>Add Data</button>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => updateData(item.id, { name: 'Updated Item' })}>Update</button>
//             <button onClick={() => deleteData(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ExampleComponent;