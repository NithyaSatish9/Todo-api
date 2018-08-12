var Sequalize = require('sequelize');
var sequelize = new Sequalize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequalize.STRING,
		allowNull: false,
		validate: {
			len: [1, 300]
		}
	},
	completed: {
		type: Sequalize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
});

sequelize.sync({
//	force: true
}).then(function() {
	console.log('Everything is synced');

	
Todo.findById(2).then(function(todo) {
	if(todo) {
		console.log(todo.toJSON());
	} else {
		console.log('TODO not found!');
	} 
});
	/*Todo.create({
		description: 'walking the dog',
		completed: false
	}).then(function(todo) {
		return Todo.create({
			description: 'Clean office'
		});
	}).then(function() {
		//return Todo.findById(1)
		return Todo.findAll({
			where: {
				//completed: false
				description : {
					$like : '%dog%'
				}
			}
		});
	}).then(function(todos) {
		if (todos) {
			todos.forEach(function(todo) {
				console.log(todo.toJSON());
			});
		} else {
			console.log('no todo found!');
		}
	}).catch(function(e) {
		console.log(e);
	});*/
});