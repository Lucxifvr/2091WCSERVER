//Task Name : Lab 3
//Author : Kiana Joi Malong
//Section : WD 201

// Use require() to import local module

var http = require('http'); 

var server = http.createServer(function(req,res){
    if(req.url == '/(root)'){
        res.writeHead(200, {'Content-Type: texr/html'});
        res.write('<html><body><p>Welcome to my Node.js Application')
        res.write('<html><body><p>Welcome John Smit. This is an activity about basics of Node.js</p></body></html>');
        res.end();
    }
    else if (req.url == "/about"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is the About Page</p></body></html>')
        res.write('<html><body><p>Hello John Smith. This activity will teach on how to deal with a simple server and local module in Node.js</p></body></html>');
        res.end();
    }
    else if (req.url == "/contact"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is the Contact Page</p></body></html>')
        res.write('<html><body><p>John Smith, if you want additional deatails about this activity go to thuse site: https://wwww.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>');
        res.end();
    }
    else if (req.url == "/gallery"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is the Gallery Page</p></body></html>');
        res.end();
    }
    else
    res.end('Invalid Request');
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running...')