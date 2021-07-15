const express = require("express");
var router = express.Router();
const path = require("path");
var fs = require("fs");

YAML = require("yaml");

const fn = path.join(__dirname, "../client/public/seeds/recipes.yaml");

router.get("/", function (req, res, next) {
  const recipes = fs.readFileSync(fn, "utf8");
  var data = YAML.parse(recipes);
  res.json(data);
});

/*
const fn = path.join(__dirname, "../client/public/seeds");

router.get("/", function (req, res, next) {
  console.log("doin it!!!!");
  var files = fs.readdirSync(fn);
  console.log(files);
  res.json(files);
});
*/

module.exports = router;
