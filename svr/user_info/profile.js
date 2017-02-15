var fs = require('fs');

exports.get_profile = function (req, res) {
        fs.readFile('user_info/profile.html', function(err, data) {
                res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
                res.end(data);
        });
}


