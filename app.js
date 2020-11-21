var express = require('express');
var app = express();

var post = 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var md5 = require('md5');

var db = require('./db');

var userRoute = require('./routes/users.route');

var loginRoute = require('./routes/login.route');

var authMiddleware = require('./middleware/auth.middleware');

app.set('view engine', 'pug');
app.set('views', './views');

var shortid = require('shortid');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
	res.render('index'); 
});

app.get('/contact', function(req, res){
	res.render('pages/contact')
});

app.use('/login', loginRoute);

app.use('/users', authMiddleware.auth, userRoute);

app.listen(post, () => {
	console.log('hello ansama');
});