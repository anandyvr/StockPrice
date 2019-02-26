export const fetchStockPrice = async () => {
    try {
        const response = await fetch("https://iextrading.com/developer/docs/AAPL");
        const data = response.toJson();
        return data;
    }
    catch (e) {
        console.log(e);
    }
}