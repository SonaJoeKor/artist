var http = require('http');
var express = require('express');
var session = require('express-session');

var app = express();
var router = express.Router();

var login = require('./home/login');
var signup = require('./home/signup');
var news = require('./home/news');

//GET
router.get('/', login.get_root);

router.get('/login', login.get_login);

router.get('/logo', login.get_logo);

router.get('/signup', signup.get_signup);

router.get('/news', news.get_news);

//POST
router.post('/login', login.post_login);

router.post('/signup', signup.post_signup);

//router.post('/news', news.post_news); 미구현

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