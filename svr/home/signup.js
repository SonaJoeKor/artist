var db = require('mariasql');
var con = new db({
	host : '127.0.0.1',
	user : 'project_admin',
	password : 'mightyplanet',
	db : 'project_DB'
});

var fs = require('fs');
var querystring = require('querystring');

exports.get_signup = function (req, res) {
	fs.readFile('home/signup.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
}

exports.post_signup = function (req, res) {
	req.on('data', function(d){
		d = querystring.parse(d.toString());
		if (d.password1 == d.password2) {
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
}
