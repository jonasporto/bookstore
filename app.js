var app = require('./config/express')();
require('./app/routes/products')(app);

app.get('/', function(request, response) {
	response.send('<h1>Home</h1>');
});


app.listen(3000, function() {
	console.log('server running');
});