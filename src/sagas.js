import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {fetchStockPrice} from './api';
import { GET_STOCK_PRICE, recieveStockPrice } from "./action";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getStockPriceData(action) {
  try {

    const data = yield call(fetchStockPrice, action.payload.stockId);
    yield put(recieveStockPrice(data));
  } catch (e) {
    //Throw Error
    console.log(e);
    //yield put(receiveHelloWorld("Hello world from redux saga!"));
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(GET_STOCK_PRICE, getStockPriceData);
}