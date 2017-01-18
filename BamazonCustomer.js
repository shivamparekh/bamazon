var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

// database connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "2",
    database: "Bamazon"
})

connection.connect(function(err) {

	// check if database is connected

    if (err) throw err;

    console.log("connected as id " + connection.threadId);

});

//fuction that runs right away. Shows table and asks initial prompts.

function start() {

	connection.query('SELECT * FROM Products', function(err, results) {

		if (err) throw err;

		//use the inquirer npm

		inquirer.prompt([{

			name: "item",
			type: "input",
			message: "Please enter the ID of the product you would like to buy?",
			validate: function(value) {

				if (!isNaN(value)) {

					return true;

				} else {

					return('Please enter a valid ItemID');

				}	

			}
			
			}

		, {

			name: "units",
			type: "input",
			message: "How many units of the product they would like to buy",
			validate: function(value) {

				if (!isNaN(value)) {

					return true;

				} else {

					return('Please enter a number');
				}	
			}	

			}

		])

		//use the console table npm

		console.table(results);

	})
}

start();