var express = require('express');
var app = express();

var post = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index'); 
});

app.get('/login', function(req, res){
	res.render('login'); 
});

app.get('/user', function(req, res){
	res.render('users/user', {
		users: [
			{id: 1, name: "Hoang", age: "19"},
			{id: 2, name: "An", age: "21"},
			{id: 3, name: "Tran", age: "22"}
		]
	}); 
});


app.listen(post, () => {
	console.log('hello ansama');
})