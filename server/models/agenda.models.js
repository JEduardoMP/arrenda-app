const mongoose = require('mongoose');

const Schema = mongoose.Schema

const AgendaScheme = new Schema(
	{
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String
		},
		phone: {
			type: Number,
			required: true
		},
		user: {
			type: Schema.Types.ObjectId,
			refers: 'user'
		}
	}
);

module.exports = mongoose.model('contact', AgendaScheme);