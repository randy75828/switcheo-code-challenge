const https = require("https");



class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy;
        this.sell = sell;
        this.id = id;
        this.pair = pair;
        this.timestamp = timestamp;
    }

    mid() {
        return (this.buy + this.sell) / 2 / 100
    }
    quote() {
        return this.pair.substr(-3);
    }
}


class Datasource {
    constructor(url) {
        this.url = url;
    }
    getPrices() {
        return new Promise((resolve, reject) => {
            https.get(this.url, res => {
                let rawResponse = [];

                res.on('data', response => { rawResponse.push(response); })
                res.on('end', () => {
                    console.log("All Data retrieved!");
                    const response = JSON.parse(Buffer.concat(rawResponse)).data.prices.map(element => new Price(element.buy, element.sell, element.id, element.pair, element.timestamp))
                    resolve(response);
                })

            }).on('error', err => {
                reject({ status: 500, statusText: err.message });
            })
        })


    }
}
module.exports = Datasource;