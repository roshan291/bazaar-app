import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from '../constants/createNewCustomer';
  
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
export function createNewCustomerReducer(state = initialState, action: any) { 
 switch (action?.type) {
   case FETCH_DATA_SUCCESS: { 
         return {
       ...state,
       data: action.data,
     };
   }
   case FETCH_DATA_FAILURE: { 
     return {
       ...state,
       data: action.payload, 
     }
   }
   default:
     return {
       ...state,
     };
 }
}

export default createNewCustomerReducer;
  