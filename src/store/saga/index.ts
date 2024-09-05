import { all, fork } from "redux-saga/effects";
import watchFetchData from "./createNewCustomer";

export function* rootSata() {
    yield all([
        fork(watchFetchData),
    ])
}