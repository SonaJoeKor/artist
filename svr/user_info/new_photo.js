var fs = require('fs');

exports.get_new_photo = function (req, res) {
        fs.readFile('user_info/new_photo.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}

