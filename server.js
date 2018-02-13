var express = require("express");
var app = express();
var port = process.env.PORT || 6999;
var mongoose = require("mongoose");
var Todo = require("./api/models/todoListModels");
var bodyParser = require("body-parser");

mongoose.Propmise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var routes = require("./api/routes/todoListRoutes");
routes(app);

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
