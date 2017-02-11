var db = require('mariasql');
var con = new db({
	host : '127.0.0.1',
	user : 'sjs',
	password : 'wlstjr30',
	db : 'jinseok'
});

var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');
var express = require('express');
var app = express();
var router = express.Router();

router.get('/login', function(req, res) {
	fs.readFile('login.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/logo', function (req, res) {
	fs.readFile('tzuyu.jpeg', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});

router.post('/login', function(req, res) {
	req.on('data', function(d) {
		d = querystring.parse(d.toString());
		con.query('select ID, password from UserInfo ' + 
			'where ID = "' + d.ID + '";',
			function(err, rows) {
			if (rows.indexOf('password') != -1) {
				res.redirect('/signup');
			} // ID값이 없을 때 처리를 위해 만들었지만 잘 안 됨.

			if (d.ID==rows[0].ID && d.password1==rows[0].password) {
				res.writeHead(200, 
				{'Content-Type':'text/html;charset=UTF-8'});
				res.write('<title>로그인 성공</title>');
				res.write(d.ID + '님 환영합니다!');
				res.write('<br>');
				res.end('로그인 성공!');	
			} else {
				res.writeHead(200, 
				{'Content-Type':'text/html;charset=UTF-8'});
				res.write('<title>비밀번호 확인</title>');
				res.end('password를 확인 해주세요.');
			}
		});
	});
});

router.get('/signup', function(req, res) {
	fs.readFile('signup.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.post('/signup', function(req, res) {
	req.on('data', function(d){
		d = querystring.parse(d.toString());
		if (d.password1 == d.password2) {
			con.query('insert into UserInfo(ID, password, Nickname)'
 				+ ' VALUES("' + d.ID +'", "' + d.password1 +
				'", "' + d.Nickname + '");');
			fs.readFile('login.html', function(err, data) {
			res.writeHead(200, 
			{'Content-type':'text/html;charset=UTF-8'});
			res.end(data);
			});
		} else {
			res.writeHead(200, 
			{'Content-Type':'text/html;charset=UTF-8'});
			res.write('<title>비밀번호 확인</title>');
			res.end('password를 확인 해주세요.');
		}
	});
});

app.use(router);
app.listen(52273, function() {
	console.log('52273 server is running');
});
