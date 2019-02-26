import loggly from 'loggly';

const client = loggly.createClient({
    token: '0bd9badb-ff6e-48cb-9988-208ae221edb7',
    subdomain: 'LENDESK'
});

export const fetchStockPrice = async (stockId) => {
    try {
        const response = await fetch("https://api.iextrading.com/1.0/stock/" + stockId + "/quote");
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            client.log("API fetch stock price failed for stock code " + stockId + " Resonse Status " + response.status);
        }
    }
    catch (e) {
        client.log(e);
    }
}

export const fetchCompanyDescription = async (stockId) => {
    try {
        const response = await fetch("https://api.iextrading.com/1.0/stock/" + stockId + "/company");
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            client.log("API fetch stock description failed for stock code " + stockId + " Resonse Status " + response.status);
        }
    }
    catch (e) {
        client.log(e);
    }
}