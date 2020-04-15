var http = require('http'); // Requer um http

// Cria o servidor 
http.createServer(function(req, res){  
    res.end("Minha API");
    console.log("To vivo");
}).listen(3000);