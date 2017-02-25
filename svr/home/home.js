var db = require('mariasql');
var con = new db({
	host : '127.0.0.1',
	user : 'project_admin',
	password : 'mightyplanet',
	db : 'project_DB'
});
var express = require('express');
var router = express.Router();
module.exports = router;

var fs = require('fs');
var querystring = require('querystring');
var session = require('express-session');

router.get('/', function (req, res) {
	res.redirect('/login');
});

router.get('/login', function (req, res) {
	fs.readFile('home/login.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.post('/login', function (req, res) {
	req.on('data', function(d) {
		d = querystring.parse(d.toString());
		con.query('select ID, password from user ' + 
			'where ID = "' + d.ID + '";',
			function(err, rows) {

			if (rows.length == 0) {
				console.log('data is not exist');
				res.redirect('/signup');
			}

			else if(d.ID==rows[0].ID && 
				d.password1==rows[0].password) {
				req.session = rows[0].ID;
				console.log('login success');
				console.log(req.session);
				res.redirect('/news');
			} else {
				console.log('login password incorrect');
				res.writeHead(200, 
				{'Content-Type':'text/html;charset=UTF-8'});
				res.write('<title>비밀번호 확인</title>');
				res.end('password를 확인 해주세요.');
			}
		});
	});
});

router.get('/signup', function (req, res) {
	fs.readFile('home/signup.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.post('/signup', function (req, res) {
	req.on('data', function(d){
		d = querystring.parse(d.toString());
		if (!d.ID || !d.password1 || !d.password2 || !d.Nickname) {
			console.log('data is NULL');
			res.redirect('/signup');
		}

		else if (d.password1 == d.password2) {
			con.query('insert into user(ID, name, password)'
				+ ' VALUES("' + d.ID +'", "' + d.Nickname
				+ '", "' + d.password1 + '");');
			con.query('insert into profile(userIndex) values((select userIndex from user where id = "' + d.ID + '"));');
			console.log('signup success');			
			res.redirect('/login');
		} else {
			res.writeHead(200, 
			{'Content-Type':'text/html;charset=UTF-8'});
			res.write('<title>비밀번호 확인</title>');
			console.log('signup password incorrect');
			res.end('password를 확인 해주세요.');
		}
	});
});

router.get('/news', function (req, res) {
	fs.readFile('home/news.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

