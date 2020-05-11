const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//connection URL and settings
const url = process.env.ATLAS_CONNECTION;
const settings = {useUnifiedTopology: true};

//database and collection names
const dbName = 'lists';
const colName = 'to_do_lists';

//READ functions
const getLists = () => {
    const myPromise = new Promise((resolve, reject) => {
        MongoClient.connect(url, settings, function(err, client) {
            if(err) {
                reject(err);
            }else {
                console.log("Connected to DB for READ");
                const db = client.db(dbName);
                const collection = db.collection(colName);
                collection.find({}).toArray(function(err, docs) {
                    if(err){
                        reject(err);
                    }else{
                        console.log("Found the To Do Lists");
                        resolve(docs);
                        client.close();
                    }
                });
            }
        });
    });
    return myPromise;
}

const getListByID = (id) => {

}

//CREATE function
const addList = (list) => {

}

//UPDATE Patch function. Primarily used to toggle complete bool
const updateList = (list) => {

}

//May consider adding additional UPDATE and DELETE functions.

module.exports = {
    getLists,
    getListByID,
    addList,
    updateList
}