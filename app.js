var express = require('express');
var app = express();

var post = 3000;
var bodyParser = require('body-parser');

var db = require('./db');

var userRoute = require('./routes/users.route');

var loginRoute = require('./routes/login.route');

app.set('view engine', 'pug');
app.set('views', './views');

var shortid = require('shortid');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
	res.render('index'); 
});

app.use('/login', loginRoute);

app.use('/users', userRoute);

app.listen(post, () => {
	console.log('hello ansama');
});