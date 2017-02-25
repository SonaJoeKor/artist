var http = require('http');
var express = require('express');
var session = require('express-session');

var app = express();
var router = express.Router();

var home = require('./home/home');
var art = require('./art/art');
var music = require('./music/music');
var user_info = require('./user_info/user_info');
var manager = require('./manager/manager');

// home
app.use('/', home);

app.use('/login', home);

app.use('/signup', home);

app.use('/news', home);

// art
app.use('/', art); // 실질적으로 /art 연결

// app.use('/art', art); /art/art에서 페이지뿌림

app.use('/art/news', art);

app.use('/art/hot', art);

app.use('/art/hot/artist', art);

app.use('/art/hot/piece', art);

app.use('/art/popularity', art);

app.use('/art/popularity/day', art);

app.use('/art/popularity/week', art);

app.use('/art/popularity/month', art);

app.use('/art/recommendation', art);

app.use('/art/recommendation/artist', art);

app.use('/art/recommendation/piece', art);

app.use('/art/random', art);

// music
app.use('/', music); // 실질적으로 /music 연결

// app.use('/music', music); /music/music에서 페이지뿌림

app.use('/music/news', music);

app.use('/music/hot', music);

app.use('/music/hot/artist', music);

app.use('/music/hot/piece', music);

app.use('/music/popularity', music);

app.use('/music/popularity/day', music);

app.use('/music/popularity/week', music);

app.use('/music/popularity/month', music);

app.use('/music/recommendation', music);

app.use('/music/recommendation/artist', music);

app.use('/music/recommendation/piece', music);

app.use('/music/random', music);

// user_info
app.use('/', user_info); // 실질적으로 /user_info 연결

// app.use('/user_info', user_info); /user_info/user_info에 페이지 뿌림

app.use('/profile', user_info);

app.use('/new_photo', user_info);

app.use('/new_music', user_info);

app.use('/new_vedio', user_info);

// manager
app.use('/manager/login', manager);

app.use('/manager/home', manager);

app.use('/manager/users', manager);

app.use('/manager/notice/new', manager);

app.use('/manager/notice/update', manager)

app.use('/manager/appinfo/update', manager);

app.use('/manager/qna/new', manager);

app.use('/manager/qna/update', manager);

// directory
app.use('/home', express.static(__dirname + "/home"));
app.use('/script', express.static(__dirname + "/script"));
app.use('/css', express.static(__dirname + "/css"));
app.use(session({
	key: 'sid',
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))
app.listen(52273, function() {
	console.log('52273 server is running');
});
