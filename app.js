var express = require("express");
var app = express();
// var createError = require("http-errors");
var path = require("path");
var bodyParser = require("body-parser");
const port = 3002;

// view engine setup
app.set("views", "./server/views");
app.set("view engine", "pug");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.locals.basedir = path.join(__dirname, "public");

// set routes
var indexRouter = require("./server/routes/index");
app.use("/", indexRouter);

app.listen(port, () => console.log(`server started on port:${port}`));
