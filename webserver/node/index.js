//get the imports
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("something is running");
}).listen(5000, () => console.log(`shh, I am listening`));