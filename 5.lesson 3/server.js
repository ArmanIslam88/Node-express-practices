const  http = require('http');
const port = 3000;
const hostname = '127.0.0.1';


const myServer = http.createServer((req,res)=> {
    res.end ('<h1> first server runnning </h1>');
});
myServer.listen(port, hostname, ()=>{
    console.log(`running in port at http://${hostname}:${port}`);
});