var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  res.send('new username is ' + username + '\n' + 'password is ' + password);
});

module.exports = router;
