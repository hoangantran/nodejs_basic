

module.exports.postCreate = function(req, res, next){
	var errors = [];
	if(!req.body.name){
		errors.push('Name is required');
	}
	if(!req.body.phone){
		errors.push('Phone is required');
	}
	if(!req.body.age){
		errors.push('Age is required');
	}
	if(errors.length > 0){
		res.render('users/create',{
			errors: errors,
			values: req.body
		});
		return;
	}
	res.locals.name = true;
	next();
}


module.exports.postSignup = function(req, res, next){
	var errors = [];
	if(!req.body.name){
		errors.push('Name is required');
	}
	if(!req.body.username){
		errors.push('username is required');
	}
	if(!req.body.password){
		errors.push('Password is required');
	}
	if(errors.length > 0){
		res.render('login/create',{ 
			errors: errors,
			values: req.body
		});
		return;
	}
	next();
}