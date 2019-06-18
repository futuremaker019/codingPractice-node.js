//jshint esversion:8

const express = require("express");
// const request = require("request");
// const ngrok = require("ngrok");

const app = express();

let hostName = [0,0,0,0];
// let port = normalizePort(process.env.POST || '3000');

app.get("/", function(req, res){
  res.send("Hello World");
});

app.post("/webhook", function(req, res){

  // let options = {
  //   url: "https://api.line.me/v2/bot/message/push",
    // method: "POST",
    // header: {
      // "bearer" :
    // };
  // };

  // request(options, function(error, response, body){
  //   console.log(error);
  // });
});


app.listen(process.env.POST || '3000', hostName, function(req, res){
  console.log("Server is running on port 3000.");
});
