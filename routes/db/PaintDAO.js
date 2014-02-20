// PaintDAO.js

var ObjectId = require('mongodb').ObjectID;

function PaintDAO(db) {
	"use strict";

	if (false == (this instanceof PaintDAO)) {
		console.log("Error: PaintDAO constructor called without 'new' operation");
		return new PaintDAO;
	}

	var colPaint = db.collection("paint");

	this.addPaint = function(username, paint, callback) {
		"use strict";

		var data = {
			user:username,
			date: new Date(),
			paint:paint
		};
		colPaint.insert(data, callback);
	}

	this.getPaint = function(users, callback) {
		"use strict";

		var query = {user: {$in:users}};
		colPaint.find(query).toArray(function(err, items) {
			if (err) return callback(err, null);

			callback(err, items);
		});
	}
};

module.exports.PaintDAO = PaintDAO;