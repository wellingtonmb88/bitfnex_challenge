import {
  SUCCESS_ORDER_LIST,
  FAILURE_ORDER_LIST
} from "../reducers/OrderReducers";
import { REQUEST_ORDER_LIST } from "../actions/OrderActions";
import { getOrderList } from "../../services/OrderAPI";

import { takeLatest, put, call, all } from "redux-saga/effects";

export function* requestOrderList() {
  try {
    const response = yield call(getOrderList);
    yield put({ type: SUCCESS_ORDER_LIST, payload: { data: response } });
  } catch (err) {
    yield put({ type: FAILURE_ORDER_LIST });
  }
}

export default all([
  takeLatest(REQUEST_ORDER_LIST, requestOrderList)
]);
