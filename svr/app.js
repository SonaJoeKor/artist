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
var art = require('./art/art');
var music = require('./music/music');

//GET
//home
router.get('/', login.get_root);

router.get('/login', login.get_login);

router.get('/logo', login.get_logo);

router.get('/signup', signup.get_signup);

router.get('/news', news.get_news);

// user_info
router.get('/profile', profile.get_profile);

router.get('/user_info', user_info.get_user_info);

router.get('/new_photo', new_photo.get_new_photo);

router.get('/new_music', new_music.get_new_music);

router.get('/new_vedio', new_vedio.get_new_vedio);

// art
router.get('/art', art.get_art);

router.get('/art/news', art.get_art_news);

router.get('/art/hot', art.get_art_hot);

router.get('/art/hot/artist', art.get_art_hot_artist);

router.get('/art/hot/piece', art.get_art_hot_piece);

router.get('/art/popularity', art.get_art_popularity);

router.get('/art/popularity/day', art.get_art_popularity_day);

router.get('/art/popularity/week', art.get_art_popularity_week);

router.get('/art/popularity/month', art.get_art_popularity_month);

router.get('/art/recommendation', art.get_art_recommendation);

router.get('/art/recommendation/artist', art.get_art_recommendation_artist);

router.get('/art/recommendation/piece', art.get_art_recommendation_piece);

router.get('/art/random', art.get_art_random);

// music
router.get('/music', music.get_music);

router.get('/music/news', music.get_music_news);

router.get('/music/hot', music.get_music_hot);

router.get('/music/hot/artist', music.get_music_hot_artist);

router.get('/music/hot/piece', music.get_music_hot_piece);

router.get('/music/popularity', music.get_music_popularity);

router.get('/music/popularity/day', music.get_music_popularity_day);

router.get('/music/popularity/week', music.get_music_popularity_week);

router.get('/music/popularity/month', music.get_music_popularity_month);

router.get('/music/recommendation', music.get_music_recommendation);

router.get('/music/recommendation/artist', music.get_music_recommendation_artist);

router.get('/music/recommendation/piece', music.get_music_recommendation_piece);

router.get('/music/random', music.get_music_random);

//POST
router.post('/login', login.post_login);

router.post('/signup', signup.post_signup);

//DELETE

//PUT

app.use(router);
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
