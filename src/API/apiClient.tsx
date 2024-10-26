import axios from 'axios'; 

const BASE_URL = 'https://webservice-y4qv.onrender.com';
// const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json', 
  },
})
 
// Response Interceptor
apiClient?.interceptors?.response?.use(
  (response) => {
    console.log(`Response from ${response?.config?.method} [${response?.status}]`);
    // if(response?.config?.method === 'post') {
    //   alert("Test");
    // }
    return response;
  },
  (error) => {
    // Handle errors and log status code if available
    if (error?.response) {
      console.error(`Error from ${error?.response?.config?.url} [${error?.response?.status}]`);
    } else {
      console.error(`Error: ${error?.message}`);
    }
    return Promise.reject(error);
  }
);


export default apiClient;