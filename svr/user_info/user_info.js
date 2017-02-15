var fs = require('fs');

exports.get_user_info = function (req, res) {
        fs.readFile('home/user_info.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}


