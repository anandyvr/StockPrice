export const GET_STOCK_PRICE = "GET_STOCK_PRICE";
export const RECIEVE_STOCK_PRICE = "RECIEVE_STOCK_PRICE";

export const getStockPrice = () => ({ type: GET_STOCK_PRICE });
export const recieveStockPrice = data => ({ type: RECIEVE_STOCK_PRICE, data });

