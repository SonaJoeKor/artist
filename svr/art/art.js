var express = require('express');
var router = express.Router();
module.exports = router;
var fs = require('fs');

router.get('/', function (req, res) {
	console.log('root'); // 출력안됨
	res.redirect('/art');
}); // 실행안됨 = 없어도 됨

router.get('/art', function (req, res) {
	console.log('/art'); // 메인메뉴 상단 눌렀을때 출력되는 로그
        fs.readFile('art/art.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/news', function (req, res) {
        fs.readFile('art/art_news.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/hot', function (req, res) {
        fs.readFile('art/art_hot.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/hot/artist', function (req, res) {
        fs.readFile('art/art_hot_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/hot/piece', function (req, res) {
        fs.readFile('art/art_hot_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/popularity', function (req, res) {
        fs.readFile('art/art_popularity.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/popularity/day', function (req, res) {
        fs.readFile('art/art_popularity_day.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/popularity/week', function (req, res) {
        fs.readFile('art/art_popularity_week.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/popularity/month', function (req, res) {
        fs.readFile('art/art_popularity_month.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/recommendation', function (req, res) {
        fs.readFile('art/art_recommendation.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/recommendation/artist', function (req, res) {
        fs.readFile('art/art_recommendation_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/recommendation/piece', function (req, res) {
        fs.readFile('art/art_recommendation_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});

router.get('/art/random', function (req, res) {
        fs.readFile('art/art_random.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
});
