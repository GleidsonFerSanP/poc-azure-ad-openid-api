var express = require('express');
var router = express.Router();

const users = [
  {
    name: "John Smith",
    age: 22
  },
  {
    name: "Paul Smith",
    age: 25
  },
  {
    name: "Micheal Turner",
    age: 32
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
