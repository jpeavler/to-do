const express = require('express');
const router = express.Router();
const {
    getLists,
    getListByID,
    addList,
    updateListValues
} = require('./../../dal/lists');

//Get Routers
router.get('/', async function (req, res) {
    try{
        const lists = await getLists();
        res.send(lists);
    }catch(err) {
        console.log(err);
        res.status(500).send('Internal server issue, check logs');
    }
});

module.exports = router;