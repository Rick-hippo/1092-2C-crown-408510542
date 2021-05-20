const db = require('../utils/database');

const Clothing_42 = class Clothing_42{
    constructor(id, name, cat_id, price, remote_url, local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchByCategory(cid){
        return db.execute('SELECT * FROM clothing_42 where cat_id = ?',[cid]);
    }

}

module.exports = Clothing_42;