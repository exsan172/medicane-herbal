var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var response = require("./config")

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  response(res, 404, "path not found !")
});

// error handler
app.use(function(err, req, res, next) {
  response(res, err.status || 500, err.message)
});

module.exports = app;
