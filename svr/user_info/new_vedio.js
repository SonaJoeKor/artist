var fs = require('fs');

exports.get_new_vedio = function (req, res) {
        fs.readFile('home/new_vedio.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}


