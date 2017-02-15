var http = require('http');
var express = require('express');
var session = require('express-session');

var app = express();
var router = express.Router();

var login = require('./home/login');
var signup = require('./home/signup');
var news = require('./home/news');
var profile = require('./user_info/profile');
var user_info = require('./user_info/user_info');
var new_music = require('./user_info/new_music');
var new_photo = require('./user_info/new_photo');
var new_vedio = require('./user_info/new_vedio');
//GET
router.get('/', login.get_root);

router.get('/login', login.get_login);

router.get('/logo', login.get_logo);

router.get('/signup', signup.get_signup);

router.get('/news', news.get_news);

router.get('/profile', profile.get_profile);

router.get('/user_info', user_info.get_user_info);

router.get('/new_photo', new_photo.get_new_photo);

router.get('/new_music', new_music.get_new_music);

router.get('/new_vedio', new_vedio.get_new_vedio);

//POST
router.post('/login', login.post_login);

router.post('/signup', signup.post_signup);

//DELETE

//PUT

app.use(router);
app.use(session({
	key: 'sid',
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))
app.listen(52273, function() {
	console.log('52273 server is running');
});
