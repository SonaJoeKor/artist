var express = require('express');
var router = express.Router();
module.exports = router;

var fs = require('fs');

router.get('/manager/login', function (req, res) {
	fs.readFile('manager/manager_login.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/appinfo/update', function (req, res) {
	fs.readFile('manager/manager_appinfo_update.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/qna/new', function (req, res) {
	fs.readFile('manager/manager_qna_new.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/qna/update', function (req, res) {
	fs.readFile('manager/manager_qna_update.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/notice/new', function (req, res) {
	fs.readFile('manager/manager_notice_new.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/users', function (req, res) {
	fs.readFile('manager/manager_users.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/home', function (req, res) {
	fs.readFile('manager/manager_home.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});

router.get('/manager/notice/update', function (req, res) {
	fs.readFile('manager/manager_notice_update.html', function(err, data) {
		res.writeHead(200,
		{'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
});
