const {model, Schema, ObjectId} = require("mongoose")

const File = new Schema({
	name: {type: String, require: true},
	type: {type: String, require: true},
	accessLink: {type: String},
	path: {type: String, default: ''},
	date: {type: Date, default: Date.now()},
	size: {type: Number, default: 0},
	user: {type: ObjectId, ref: 'User'},
	parent: {type: ObjectId, ref: 'File'},
	children: [{type: ObjectId, ref: 'File'}]
})

module.exports = model('File', File)