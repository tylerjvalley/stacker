const db = require('../util/database');

module.exports = class Data {

    
    constructor(ib_eth_apy) {
        this.ib_eth_apy = ib_eth_apy;
    }



    static fetchAll() {
       return db.execute('SELECT * FROM info');
    }


}