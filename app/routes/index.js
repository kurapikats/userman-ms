var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>
  res.json({
    message: "Hello World!"
  }),
);

module.exports = router;
