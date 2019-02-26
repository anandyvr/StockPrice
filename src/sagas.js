import { call, put, takeLatest } from "redux-saga/effects";
import {fetchStockPrice, fetchCompanyDescription} from './api';
import { GET_STOCK_PRICE, GET_STOCK_DESCRIPTION, recieveStockPrice, recieveStockDescription } from "./action";
import loggly from 'loggly';

const client = loggly.createClient({
  token: '0bd9badb-ff6e-48cb-9988-208ae221edb7',
  subdomain: 'LENDESK'
});

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getStockPriceData(action) {
  try {
    const data = yield call(fetchStockPrice, action.payload.stockId);
    yield put(recieveStockPrice(data));
      } catch (e) {
    //Throw Error
    client.log(e.message);
  }
}
function* getStockDescriptionData(action) {
    try {
      const data = yield call(fetchCompanyDescription, action.payload.stockId);
      yield put(recieveStockDescription(data));
    } catch (e) {
      client.log(e.message);
    }
  }


export default function* mySaga() {
  yield takeLatest(GET_STOCK_PRICE, getStockPriceData);
  yield takeLatest(GET_STOCK_DESCRIPTION, getStockDescriptionData);
}