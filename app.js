var express = require('express');
var app = express();

var post = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
	res.render('index'); 
});

app.get('/login', function(req, res){
	res.render('login'); 
});

var users = [

			{id: 1, name: "Tran", age: "19"},
			{id: 2, name: "Hoang", age: "21"},
			{id: 3, name: "An", age: "22"},
			{id: 4, name: "Xuan", age: "19"},
			{id: 5, name: "Khai", age: "21"},
			{id: 6, name: "Nguyen", age: "22"},
			{id: 7, name: "Luu", age: "19"},
			{id: 8, name: "Dung", age: "21"},
			{id: 9, name: "Chien", age: "22"}
];

app.get('/user', function(req, res){
	res.render('users/user', {
		users: users
	}); 
});

app.get('/user/search', function(req, res) {
	var q = req.query.q;
	var matchUser = users.filter(function(user) {
		return user.name.indexOf(q) !== -1;
	});

	res.render('users/user', {
		users: matchUser,
		value : q
	}); 
});

































app.listen(post, () => {
	console.log('hello ansama');
})