const express = require("express");
const path = require("path");

const hbs = require("hbs");

const indexRouter = require("./routes/index");

const app = express();

const staticpath = path.join(__dirname);
const templatespath = path.join(__dirname, "./template/views");
const partialpath = path.join(__dirname, "./template/partials");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views", templatespath);
hbs.registerPartials(partialpath);

app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);


app.listen(4000, () => {
  console.log("Listening on port 4000...");
});

module.exports = app;