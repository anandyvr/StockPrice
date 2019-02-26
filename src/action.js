export const GET_STOCK_PRICE = "GET_STOCK_PRICE";
export const RECIEVE_STOCK_PRICE = "RECIEVE_STOCK_PRICE";
export const GET_STOCK_DESCRIPTION = "GET_STOCK_DESCRIPTION";
export const RECIEVE_STOCK_DESCRIPTION = "RECIEVE_STOCK_DESCRIPTION";

export const getStockPrice = data => ({ type: GET_STOCK_PRICE, payload: data });
export const recieveStockPrice = data => ({ type: RECIEVE_STOCK_PRICE, data });

export const getStockDescription = data => ({ type: GET_STOCK_DESCRIPTION, payload: data });
export const recieveStockDescription = data => ({ type: RECIEVE_STOCK_DESCRIPTION, data });
