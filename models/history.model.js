const mongoose = require('mongoose');

const historyModel = new mongoose.Schema({
	input1:{
		type: Number,
		required: true
	},
	input2:{
		type:Number,
		required:true
	},
	operator:{
		type:String,
		required:true
	},
	result:{
		type:Number,
	},
	email:{
		type:String,
	},
	timestamp:{
		type:Date,
		default: Date.now
	}

})

module.exports = mongoose.model('History',historyModel)