const express = require('express')
const router = express.Router()
const client = require('./../modules/db')
router.get('/', function(req, res, next) {
    client.db.collection('messages').find().toArray().then(messages => {
        res.json(messages)
    })
})

router.get('/:id', function(req, res, next) {
    const id = req.params.id
    client.db.collection('messages').findOne({_id: new client.ObjectID(req.params.id)}).then(message => {
        res.json(message)
    })
    
})

module.exports = router