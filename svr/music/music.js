var fs = require('fs');

exports.get_music = function (req, res) {
        fs.readFile('music/music.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_news = function (req, res) {
        fs.readFile('music/music_news.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_hot = function (req, res) {
        fs.readFile('music/music_hot.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_hot_artist = function (req, res) {
        fs.readFile('music/music_hot_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_hot_piece = function (req, res) {
        fs.readFile('music/music_hot_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_popularity = function (req, res) {
        fs.readFile('music/music_popularity.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_popularity_day = function (req, res) {
        fs.readFile('music/music_popularity_day.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_popularity_week = function (req, res) {
        fs.readFile('music/music_popularity_week.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_popularity_month = function (req, res) {
        fs.readFile('music/music_popularity_month.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_recommendation = function (req, res) {
        fs.readFile('music/music_recommendation.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_recommendation_artist = function (req, res) {
        fs.readFile('music/music_recommendation_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_recommendation_piece = function (req, res) {
        fs.readFile('music/music_recommendation_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_music_random = function (req, res) {
        fs.readFile('music/music_random.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}
