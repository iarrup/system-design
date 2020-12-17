//get the imports
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home </h1>');
    }
    console.log("something is running");
});

const PORT = process.env.PORT || 5000;

server.listen(5000, () => console.log(`shh, I am listening at ${PORT} port`));