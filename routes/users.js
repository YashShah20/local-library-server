var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("I am Yash Shah");
});

router.get("/cool", function (req, res, next) {
  res.send(`You are so <i>cool</i>`);
});

module.exports = router;
