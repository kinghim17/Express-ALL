// what is HTTP
//client side protocol,address,header,body,method(POST,GET,PUT, DELETE)
//server side request header, request body, status code

//code begins here create by npm init -y
const express= require("express");
const port=3000;
const app=express();
app.get('/',function(req,res){
    res.send("hello world")
})
app.listen(port);

//constants express calling,port,object,listen