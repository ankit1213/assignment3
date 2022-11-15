const fs=require("fs").promises
const { writeFile } = require("fs")
const http=require("http")

fs,writeFile("home.html","<h1>Ankit Saxena -The warror King</h1>",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File created successfully")
    }
})

const server=http.createServer((req,res)=>{
    fs.readFile("home.html")
    
    .then(contents=>{
        res.setHeader("Content-type",'text/html')
        res.writeHead(200)
        res.end(contents)
    })
})


server.listen(3000);