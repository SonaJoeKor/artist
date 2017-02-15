var fs = require('fs');

exports.get_art = function (req, res) {
        fs.readFile('art/art.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_news = function (req, res) {
        fs.readFile('art/art_news.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_hot = function (req, res) {
        fs.readFile('art/art_hot.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_hot_artist = function (req, res) {
        fs.readFile('art/art_hot_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_hot_piece = function (req, res) {
        fs.readFile('art/art_hot_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_popularity = function (req, res) {
        fs.readFile('art/art_popularity.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_popularity_day = function (req, res) {
        fs.readFile('art/art_popularity_day.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_popularity_week = function (req, res) {
        fs.readFile('art/art_popularity_week.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_popularity_month = function (req, res) {
        fs.readFile('art/art_popularity_month.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_recommendation = function (req, res) {
        fs.readFile('art/art_recommendation.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_recommendation_artist = function (req, res) {
        fs.readFile('art/art_recommendation_artist.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_recommendation_piece = function (req, res) {
        fs.readFile('art/art_recommendation_piece.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

exports.get_art_random = function (req, res) {
        fs.readFile('art/art_random.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}
