const express = require("express");
const https = require("https");

const app = express();



app.get("/", function(req, res){


    const url = "https://v2.jokeapi.dev/joke/Any?type=single";
    
    https.get(url, function(response){
        // console.log(response.statusCode);
        // console.log(response);
        response.on("data", function(data){
        const jokeData = JSON.parse(data)
        const joky = jokeData.joke
        // console.log(joky)
        res.send("Your joke is - " + joky)
        })
    })
    // res.send("server is up")
})



app.listen(3000, function(){
    console.log("everything is aok");
})