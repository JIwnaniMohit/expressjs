var http=require('http');
serv=http.createServer(function(req,resp){
  resp.write("Hello India");
  console.log("request is received")
  resp.end("Welcome to Node server!!!");

});
serv.listen(3000);
console.log("server running at port 3000");
