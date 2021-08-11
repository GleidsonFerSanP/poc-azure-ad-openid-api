var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  console.log('AUTH', req.body);
  
  res.send('req');
});

module.exports = router;
