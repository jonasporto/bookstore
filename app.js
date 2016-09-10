var app = require('./config/express')();

app.get('/', function(request, response) {
	response.send('<h1>Home</h1>');
});

app.listen(3000, function() {
	console.log('server running');
});