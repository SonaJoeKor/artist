var fs = require('fs');

exports.get_profile = function (req, res) {
        fs.readFile('home/profile.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}


