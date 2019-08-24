var express = require('express');
var router = express.Router();
const clientDb = require('./../bd/bd')

router.get('/current', function(req, res, next) {
  clientDb.findOneUser(clientDb.db).then(user=> res.json({
    firstName: user.firstName,
    lastName: user.lastName,
  })).catch(err => res.status(500))
  
});

module.exports = router;
