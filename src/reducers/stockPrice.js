import { RECIEVE_STOCK_PRICE } from '../action';

export default (state = "", { type, data }) => {

    switch (type) {
        case 'RECIEVE_STOCK_PRICE':
            return data;
        default:
            return state;

    }
}