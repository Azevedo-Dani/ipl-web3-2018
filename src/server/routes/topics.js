const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.json([
        {name: 'topic1'}, 
        {name: 'topic2'},
        {name: 'topic3'},
        {name: 'topic4'},
    ]);
})

module.exports = router