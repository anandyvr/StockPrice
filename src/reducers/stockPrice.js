import { GET_STOCK_PRICE } from '../action';

export default (state = "", { type }) => {

    switch (type) {
        case 'GET_STOCK_PRICE':
            return state;
        default:
            return state;

    }
}