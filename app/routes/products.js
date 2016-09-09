module.exports = function(app) {
	app.get('/products', function(request, response) {
		response.render('products/list');
	});
}
