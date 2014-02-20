
/*
 * GET home page.
 */


//var user = require('./routes/user');
var ContentHandler = require('./ContentHandler');

function route(app, db) {
	var contentHandler = new ContentHandler(db);


	app.get('/', contentHandler.showRootPage);
	app.post('/paint', contentHandler.paint);
//	app.get('/users', user.list);

}

module.exports = route;


/*
exports.index = function(req, res){
  res.render('index', { title: 'Pictor' });
};
*/