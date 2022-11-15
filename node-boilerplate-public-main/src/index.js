var http = require("http");
var url = require('url');

const httpServer = http.createServer(handleServer).listen(8081,()=>{
    console.log("server is running at port 8081")
});


function handleServer(req, res) {
    var q = url.parse(req.url, true);
    if(q.pathname=="/welcome"){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to Dominos!")
    }
    else if(q.pathname=="/contact"){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data={
            
            phone: '18602100000', 
            email: 'guestcaredominos@jublfood.com' 
        }
        const jsonContent = JSON.stringify(data);
        res.end(jsonContent)

    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("404 Not Found");
    }
   
}

module.exports = httpServer;