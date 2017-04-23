var express = require("express");
var app =  express();

app.use(express.static('./'));
//
// app.get("/",function (req,res) {
//     res.sendFile("./a.html");
// });

var server = app.listen(3000,function () {
    var port = server.address().port;

    console.log("listening at :%s",port);
});