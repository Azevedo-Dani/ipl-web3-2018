const express = require('express')
const router = express.Router()
const client = require('../modules/db')
const bcrypt = require('bcrypt')
const jwtWebToken = require('jsonwebtoken')
router.post('/', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    client.db.collection('users').findOne({email:email}).then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.status(500).send(err)
                } else {
                    if (result) { // ok
                        const secret = process.env.JWT_SECRET
                        const exp = Date.now() + 12 * 60 * 60 * 1000; // 12h
                        jwtWebToken.sign({firstName: user.firstName, lastName: user.lastName, exp: exp}, secret, (err, result) => {
                            if (err) {
                                res.status(500).send(err)
                            } else {
                                console.log(result)
                                res.status(200).json({
                                    jwt: result
                                })
                            }
                        })
                        
                    } else {
                        res.status(401).send('Bad email or password')
                    }
                }
            })
        } else {
            res.status(401).send('Bad email or password')
        }
    })
    
})

module.exports = router