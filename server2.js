var express = require("express");
var app =  express();


app.get("/json-data",function (req,res) {
    res.json({name:"hello"});
});

app.get("/jsonp-data",function (req,res) {
    res.jsonp({name:"world"});
});

var server = app.listen(3001,function () {
    var port = server.address().port;

    console.log("listening at :%s",port);
});