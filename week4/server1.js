const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req,res)=>{

    try{
    const data = await fs.readFile('./server2.html');
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // res.write('<h1>Hello Node!</h1>');
    // res.end('<p>Hello Server!</p>');
    res.end('data')
    }
    catch(err){
    console.error(err);        
    res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
    res.end(err.message);
    }
})
    server.listen(8080);
    server.on('listen', ()=>{
        console.log('8080번 포트에서 서버 대기 중입니다!');
    })
    server.on('error', ()=>{
        console.error(err);
    })