
// ContentHandler

var PaintDAO = require('./db/PaintDAO').PaintDAO;

function ContentHandler(db) {
	"use strict";

	var dbPaint = new PaintDAO(db);

	this.showRootPage = function(req, res, next) {
		var username='A';
		var follower='B C';
		res.render('index', { title: 'Pictor', username:username, follower:follower });
	}


	this.clientPaint = function(req, res, next) {
		// POST => get parameter xyz from req.body.xyz
		var pos = req.body.pos;
		var username = req.body.username;
		var x = parseInt(pos.x);
		console.log("clientPaint:" + username + ":" + pos.x + "/" + pos.y);

		dbPaint.addPaint(username, pos, function(err, result) {
			res.send(pos);
		});
	}

	this.getPaint = function(req, res, next) {
		// POS => get parameter xyz from req.query.xyz
		var follower = req.query.follower;
		var aFollow = follower.split(' ');

		dbPaint.getPaint(aFollow, function(err, result) {
			res.send(result);
		});
	}


}

module.exports = ContentHandler;
