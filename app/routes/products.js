module.exports = function(app) {
	app.get('/products', function(request, response) {
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'bookstore'
		});

		connection.query('select * from books', function(err, result) {
			response.send(result);	
		});

		connection.end();
		//response.render('products/list');
	});
}
