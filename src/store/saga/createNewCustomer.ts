import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/createNewCustomer';
import { FETCH_DATA_REQUEST } from '../constants/createNewCustomer';
import axios from 'axios';

const fetchDataApi = async () => {
    return await axios.get("http://localhost:8000/createcustomer").then(res => res.data)
}

function* fetchDataWorker(): Generator<any, void, any> { 
  try {
    const data = yield call(fetchDataApi as any);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataWorker);
}

export default watchFetchData;