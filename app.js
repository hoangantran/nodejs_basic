require('dotenv').config();

var mongoose = require('mongoose');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var md5 = require('md5');
var shortid = require('shortid');
var db = require('./db');
var csurf = require('csurf');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/users.route');
var loginRoute = require('./routes/login.route');
var productRoute = require('./routes/products.route');
var cartRoute = require('./routes/cart.route');
var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');
var cart = require('./middleware/cart.middleware');
var tranferRoute = require('./routes/tranfer.route');
var productsApiRoute = require('./api/route/api.route');

var post = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SIGNED_KEY));
app.use(sessionMiddleware.session);
/*app.use(csurf({cookie : true}));*/
app.use(express.static('public'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res){
	res.render('index'); 
});

app.use('/login', loginRoute);

app.use('/users', authMiddleware.auth, userRoute);

app.use('/products', cart.count, productRoute);

app.use('/cart', cartRoute);

app.use('/tranfer', authMiddleware.auth, tranferRoute);

app.use('/api', productsApiRoute);

app.listen(post, () => {
	console.log('hello ansama');
});