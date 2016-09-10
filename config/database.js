var mysql = require('mysql');
var dbCredentials = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'bookstore'
};

function createConnection() {
	var connection = mysql.createConnection(dbCredentials);
	return connection;
}

module.exports = function() {
	return createConnection;
}