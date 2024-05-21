// creating server

const http = require('http') //importing package
http.createServer(function (req, res) {
    res.write("server is working") //response 
    res.end()

}).listen(3000)