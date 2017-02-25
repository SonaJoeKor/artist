var express = require('express');
var router = express.Router();
module.exports = router;
var fs = require('fs');

router.get('/music', function (req, res) {
        fs.readFile('music/music.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/news', function (req, res) {
        fs.readFile('music/music_news.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/hot', function (req, res) {
        fs.readFile('music/music_hot.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/hot/artist', function (req, res) {
        fs.readFile('music/music_hot_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/hot/piece', function (req, res) {
        fs.readFile('music/music_hot_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/popularity', function (req, res) {
        fs.readFile('music/music_popularity.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/popularity/day', function (req, res) {
        fs.readFile('music/music_popularity_day.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/popularity/week', function (req, res) {
        fs.readFile('music/music_popularity_week.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/popularity/month', function (req, res) {
        fs.readFile('music/music_popularity_month.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/recommendation', function (req, res) {
        fs.readFile('music/music_recommendation.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/recommendation/artist', function (req, res) {
        fs.readFile('music/music_recommendation_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/recommendation/piece', function (req, res) {
        fs.readFile('music/music_recommendation_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/music/random', function (req, res) {
        fs.readFile('music/music_random.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});
