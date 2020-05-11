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