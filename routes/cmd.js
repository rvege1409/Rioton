var router = require('express').Router();
var exec = require("child_process").exec;


router.get('/', (req,res) => {
	res.render('cmd.ejs',{title: 'Remote control'});
});


router.get('/:func', (req,res) => {
	console.log("Func : " + req.params.func);
	var key;
	if(req.params.func == null){
		key=" ";
	}
	else{
		key = req.params.func;
	}
	 exec(key, function(err,stdout,stderr){
		console.log("stdout : " + stdout);
		console.log("stderr : " + stderr);
		res.redirect('/cmd');
	});
});

module.exports = router;
