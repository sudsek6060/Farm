const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathname = req.url;

    // Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.end('This is the OVERVIEW')
    
    // Product page
    } else if (pathname === '/product') {
        res.end('This is the PRODUCT');

    // API
    } else if (pathname === '/api') {
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(data);

    // Not Found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('Page not Found!');
    }

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
});