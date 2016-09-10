module.exports = function(app) {

	app.get('/products', function renderProducts(request, response) {
			
			var connection = app.database();

			connection.query('select * from books', function(err, books) {
				response.render('products/books', {'books': books});	
			});

			connection.end();
	});
}
