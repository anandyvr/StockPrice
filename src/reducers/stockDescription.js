import { RECIEVE_STOCK_DESCRIPTION } from '../action';

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECIEVE_STOCK_DESCRIPTION:
            return data ? data : {};
        default:
            return state;
    }
}