var db = require('mariasql');
var con = new db({
	host : '127.0.0.1',
	user : 'project_admin',
	password : 'mightyplanet',
	db : 'project_DB'
});

var fs = require('fs');
var querystring = require('querystring');
var session = require('express-session');

exports.get_root = function (req, res) {
	res.redirect('/login');
}

exports.get_login = function (req, res) {
	fs.readFile('home/login.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
}

exports.get_logo = function (req, res) {
	fs.readFile('home/tzuyu.jpeg', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
}

exports.post_login = function (req, res) {
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
}
