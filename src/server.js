var http = require('http');
var fs = require('fs');
var path = require('path');

const port = process.env.PORT || 3000

const server = http.createServer(function (req, res) {

    var filePath = '.' + req.url;

    if (filePath == './') {
        filePath = './views/index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var fileTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = fileTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function (error, data) {
        if (error) {
            res.write(error.message)
            res.end();

        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data, 'utf-8');
            res.end();
        }
    });

});

server.listen(port, () => {
    console.log(`app is listening to port ${port}`);
});