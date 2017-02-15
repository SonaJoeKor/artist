var fs = require('fs');

exports.get_news = function (req, res) {
	fs.readFile('home/news.html', function(err, data) {
		res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
		res.end(data);
	});
}
