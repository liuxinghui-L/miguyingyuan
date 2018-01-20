var express =require('express');
var router = express.Router();
var users = require("../module/users.js");

router.post('/login',function(req,res,next){
	console.log(res.body)
	users.find({
		username:req.body.username,
		password:req.body.password
	},function(error,info){
		if(!error){
			if(info.length==0){
				res.send({result:false,message:"用户名或者密码错误"});			
			}else{
				req.session.userlogin=info[0];
				res.send({result:true,message:"登录成功"});
			}
		}
	})
});

router.post('/register',function(req,res,next){
	console.log(res.body)
	users.find({username:req.body.username},function(error,info){
		console.log(444)
		if(info.length==0){
			users.create({
				username:req.body.username,
				password:req.body.password
			},function(error,info){
				if(!error){
					res.send({result:true,message:"注册成功"})
				}
			})
		}
		else{
			res.send({result:false,message:"用户名已存在"});
		}
	})
})

module.exports = router;