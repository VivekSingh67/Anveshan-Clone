var express = require('express');
var router = express.Router();


// login get request

router.get("/allProduct", function (req, res, next) {
  res.render("allProduct", { title: "scaleedge" });
});

router.get("/ghee", function (req, res, next) {
  res.render("ghee", { title: "scaleedge" });
});

router.get("/oils", function (req, res, next) {
  res.render("oils", { title: "scaleedge" });
});

router.get("/best-deals", function (req, res, next) {
  res.render("best-deals", { title: "scaleedge" });
});

router.get("/combos", function (req, res, next) {
  res.render("combos", { title: "scaleedge" });
});


router.get("/Gifting", function (req, res, next) {
  res.render("Gifting", { title: "scaleedge" });
});

router.get("/superfoods", function (req, res, next) {
  res.render("superfoods", { title: "scaleedge" });
});

router.get("/natualHoney", function (req, res, next) {
  res.render("natualHoney", { title: "scaleedge" });
});

router.get("/", function (req, res, next) {
  res.render("dashboard", { title: "scaleedge" });
});

router.get("/samplerKit", function (req, res, next) {
  res.render("samplerKit", { title: "scaleedge" });
});

router.get("/degestiveCare", function (req, res, next) {
  res.render("degestiveCare", { title: "scaleedge" });
});

router.get("/immunityBoosting", function (req, res, next) {
  res.render("immunityBoosting", { title: "scaleedge" });
});

router.get("/diabeticCare", function (req, res, next) {
  res.render("diabeticCare", { title: "scaleedge" });
});

router.get("/energyBoosting", function (req, res, next) {
  res.render("energyBoosting", { title: "scaleedge" });
});

router.get("/weightManagement", function (req, res, next) {
  res.render("weightManagement", { title: "scaleedge" });
});

router.get("/recipesBlog", function (req, res, next) {
  res.render("recipesBlog", { title: "scaleedge" });
});

router.get("/anveshanBlogs", function (req, res, next) {
  res.render("anveshanBlogs", { title: "scaleedge" });
});

router.get("/ourStory", function (req, res, next) {
  res.render("ourStory", { title: "scaleedge" });
});

module.exports = router;
