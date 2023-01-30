//Task Name : Lab 3
//Author : Kiana Joi Malong
//Section : WD 201

// Use require() to import local module

var http = require('http'); 

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type: texr/html'});
        res.write('<html><body><p>Welcome to my Node.js Application')
    }
})