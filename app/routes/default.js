module.exports = function(app) {
	app.get('/', function(request, response) {
		response.send('<h1>Home</h1>');
	});
}