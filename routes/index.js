
/*
 * GET home page.
 */


//var user = require('./routes/user');
var ContentHandler = require('./ContentHandler');

function route(app, db) {
	var contentHandler = new ContentHandler(db);


	app.get('/', contentHandler.showRootPage);
	app.post('/clpaint', contentHandler.clientPaint);
	app.get('/paint', contentHandler.getPaint);
//	app.get('/users', user.list);

}

module.exports = route;


/*
exports.index = function(req, res){
  res.render('index', { title: 'Pictor' });
};
*/