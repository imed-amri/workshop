const http= require("http");
const express= require("express");
const server =http.createServer(express());
server.listen(9090,function(){
    console.log("connecting port 9090")
})

