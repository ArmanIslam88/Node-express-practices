const http = require("http");
const fs = require("fs");

const PORT = 3000;
const hostName ="127.0.0.1";

// console.log(req,url);
const server = http.createServer((req,res) => {

    //home page 
  if (req.url=== '/'){
      fs.readFile("index.html", (err,data ) =>{
        res.writeHead(200,{"content-Type":"text/html"});
        res.write(data);
        res.end();
      })
  }
    //about pagee
 else if (req.url=== '/about'){
    fs.readFile("about.html", (err,data ) =>{
      res.writeHead(200,{"content-Type":"text/html"});
      res.write(data);
      res.end();
    })
}
//contact page 
else if (req.url==='/contact'){
    fs.readFile("contact.html", (err,data ) =>{
      res.writeHead(200,{"content-Type":"text/html"});
      res.write(data);
      res.end();
    })
}
        //error page 
else{
    fs.readFile("error.html", (err,data ) =>{
      res.writeHead(404,{"content-Type":"text/html"});
      res.write(data);
      res.end();
    });
}
});
server.listen(PORT, hostName, () => {
    console.log(`server is running at http://${hostName}:${PORT}`);
});