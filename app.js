var express = require('express');
var app = express();

var post = 3000;

app.get('/', function(request, response){
	response.send('<h1>Hello ansama</h1>'); 
});


app.listen(post, () => {
	console.log('hello ansama');
})