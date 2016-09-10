var express = require('express');
var load = require('express-load');

module.exports = function() {

	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	load('routes', {cwd: 'app', verbose: true})
		.into(app);

	load('database', {cwd: 'config', verbose: true})
		.into(app);

	return app;
}