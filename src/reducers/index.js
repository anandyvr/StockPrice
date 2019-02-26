import { combineReducers } from 'redux';
import stockPrice from './stockPrice';
import stockDescription from './stockDescription';

export default combineReducers({
    stockPrice,
    stockDescription
});