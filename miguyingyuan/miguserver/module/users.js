var mongoose = require('mongoose');
var Schema = mongoose.Schema;//概要计划
var users={
	username:String,
	password:String,
}
var model = mongoose.model('users',new Schema(users));

module.exports = model;