
let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');
let server = http.createServer((req, res) => {
    let contentType = 'text/html';
    let filePath = path.join(__dirname, 'public', 'index');
    
    const parsedUrl = url.parse(req.url, true); 
    const pathName = parsedUrl.pathname;
    const queryObject = parsedUrl.query; 
    const fn = queryObject.file || '';
    
    if (fn.match(/LICENSE/g)) {
        filePath = path.join(__dirname, 'public', 'LICENSE');
    } else if (fn.match(/SUCCESS/g)) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            filePath = path.join(__dirname, 'public', 'outdex');
            fs.appendFile(filePath, body, 'utf8', err => {
                if (err) {
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('SUCCESS', 'utf-8');
                }
            });
        });
        return;
    }
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});
server.listen();
