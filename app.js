var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.send('<h1>Home</h1>');
});

app.get('/products', function(request, response) {
	response.render('products/list');
});

app.listen(3000, function() {
	console.log('server running');
});