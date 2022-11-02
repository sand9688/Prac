const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
    
    res.write(`<h1>hello Node!</h1>`);

    res.end(`<p>Bye Node</p>`);
 });
server.listen(8080);
server.on('listening', ()=>{console.log("8080 리스닝 중")});
server.on('error', (error)=> {console.log(error)}); 

const server2 = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
    
    res.write(`<h1>hello Node!</h1>`);

    res.end(`<p>Bye Node</p>`);
 });
server2.listen(8081);
server2.on('listening', ()=>{console.log("8081 리스닝 중")});
server2.on('error', (error)=> {console.log(error)}); 

