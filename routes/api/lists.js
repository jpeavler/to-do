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

router.get('/:id', async function (req, res) {
    try{
        const list = await getListByID(req.params.id);
        res.send(list);
    }catch(err) {
        if(err.error) {
            res.status(400).send(err);
        }
        console.log(err);
        res.status(500).send('Internal server issue, check logs');
    }
});

//Post Router
router.post('/', async function (req, res) {
    try{
        const newList = await addList(req.body);
        res.send(newList);
    }catch(err) {
        if(err.error) {
            res.status(400).send(err);
        }else{
            console.log(err);
            res.status(500).send('Internal server issue, check logs');
        }
    }
});

module.exports = router;