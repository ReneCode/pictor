
// ContentHandler

function ContentHandler(db) {
	"use strict";

	this.showRootPage = function(req, res, next) {
		res.render('index', { title: 'Pictor' });

	}


	this.paint = function(req, res, next) {
		var pos = req.body.pos;
		var x = parseInt(pos.x);
		pos.x = 30 + x;
		console.log("paint:" + pos.x + "/" + pos.y);
		res.send(pos);
	}
//	var dbBookmark = new BookmarkDAO(db);
}

module.exports = ContentHandler;
