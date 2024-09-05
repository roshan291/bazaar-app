import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../constants/createNewCustomer";

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
  });
  
  export const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    data,
  });
  
  export const fetchDataFailure = (error: any) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
  });