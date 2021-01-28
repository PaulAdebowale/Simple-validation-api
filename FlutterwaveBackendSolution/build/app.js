"use strict";

var express = require('express');//installs express

var _require = require('./api/home'),//points to /api/home for the basic home page
    home = _require.home;

var _require2 = require('./api/validate'),//points to /api/validate for the validation processes

    validateRule = _require2.validateRule;

var _require3 = require('./middleware/utils'),//points to /api/validate for the validation processes
    validator = _require3.validator,
    validateDataField = _require3.validateDataField;

var _require4 = require('./middleware/schema'),//points to ./middleware/utils for the joi.js functionality
    requestBodySchema = _require4.requestBodySchema;

require('dotenv').config();

//This handles the GET and POST request of the static website 
var app = express();
app.use(express.json());
app.get('/', home);
app.get('/validate-rule',validator(requestBodySchema,validateDataField, validateRule
))
app.post('/validate-rule', validator(requestBodySchema,validateDataField, validateRule
)); //configure PORT

var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("listening on port ".concat(port, "........"));
});