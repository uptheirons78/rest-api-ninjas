const express = require('express');
const router = express.Router();

//get a list of items from DB
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'});
});

//add a new item to DB
router.post('/ninjas', (req, res) => {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// update item of the DB
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'});
});

// delete item from DB
router.delete('/ninjas', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;
