// creating server

const http = require('http') //importing package
http.createServer(function (req, res) {
    res.write("server is running") //response 
    res.end()

}).listen(3000)

// os module - inbuilt function

const os=require("os")