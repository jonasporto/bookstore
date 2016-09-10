module.exports = function(app) {
	app.get('/products', function(request, response) {
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'bookstore'
		});

		connection.query('select * from books', function(err, books) {
			response.render('products/books', {'books': books});	
		});

		connection.end();
		//response.render('products/list');
	});
}
