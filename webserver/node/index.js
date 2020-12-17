//get the imports
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let filename = path.join(__dirname, 
        'public', req.url === '/' ? 'index.html' : req.url);

    let filext = path.extname(filename);
    let contentType = 'text/html';
    switch (filext) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/json';
            break;
    }
    
    fs.readFile(filename, (err, content) => {
        if (err) {
            let errfile = 'error.html'
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                                (err, content) => {
                    res.writeHead(404, contentType);
                    res.end(content);
                });
            } else {
                fs.readFile(path.join(__dirname, 'public', 'error.html'), 
                                (err, content) => {
                    res.writeHead(500, contentType);
                                
                    res.end(content);
                });
            }
        } else {
            res.writeHead(200, contentType);
            res.end(content);
        }
    });

});

const PORT = process.env.PORT || 5000;

server.listen(5000, () => console.log(`shh, I am listening at ${PORT} port`));