import { all } from "redux-saga/effects";

import orderSaga from "./OrderSaga";

function* rootSaga() {
  yield all([orderSaga]);
}

export default rootSaga;
