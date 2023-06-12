var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Welcome to BitMaple" });
});

router.get("/consulting", function (req, res, next) {
  res.render("consulting/index", { title: "BitMaple Consulting" });
});

router.get("/publishing", function (req, res, next) {
  res.render("publishing/index", { title: "BitMaple Publishing" });
});

module.exports = router;
