'use strict';
//jshint unused:false
mongoose.connect('mongodb://localhost/oaa');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
});

module.exports = mongoose.model('User', schema);