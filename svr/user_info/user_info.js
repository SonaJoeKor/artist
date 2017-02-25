var express = require('express');
var router = express.Router();
module.exports = router;
var fs = require('fs');

router.get('/user_info', function (req, res) {
        fs.readFile('user_info/user_info.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/profile', function (req, res) {
        fs.readFile('user_info/profile.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/new_photo', function (req, res) {
        fs.readFile('user_info/new_photo.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/new_music', function (req, res) {
        fs.readFile('user_info/new_music.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/new_vedio', function (req, res) {
        fs.readFile('user_info/new_vedio.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});
