const express = require('express')
const router = express.Router()
const client = require('./../modules/db')

/**
 * Get all messages
 */
router.get('/', function(req, res, next) {
    client.db.collection('messages').find().toArray().then(messages => {
        res.json(messages)
    })
})


/**
 * Get the message with specific id
 */
router.get('/:id', function(req, res, next) {
    const id = req.params.id
    client.db.collection('messages').findOne({_id: new client.ObjectID(id)}).then(message => {
        res.json(message)
    })
})

/**
 * Delete the message
 */
router.delete('/:id', function(req, res, next){
    const id = req.params.id
    client.db.collection('messages').remove({_id: client.ObjectID(id)}).then(resp=>{
        res.status(200).send('Message deleted')
    })
})

/**
 * Create a message
 */
router.post('/', function(req, res, next) {
    const message = req.body.message
    console.log(req.body)
    if (message) {
        client.db.collection('messages').insertOne({message:message}).then(resp=> {
            res.status(200).send('Message added')
        })
    } else {
        res.status(400).send('Message undefined')
    }
})

/**
 * Update
 */

router.post('/:id', function(req, res, next){
    console.log(req.params.id)
    console.log(req.body)
    client.db.collection('messages').updateOne({_id: new client.ObjectID(req.params.id)}, {$set:{message:req.body.message}})
    .then(result => {
        res.send('message updated')
    })
})

module.exports = router