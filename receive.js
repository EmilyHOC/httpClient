<!--接收数据的http服务器-->
var http=require('http');
var server=http.createServer(function (req,res) {
    if(req.url!=="icm.ico"){
        req.on('data',function (data) {
            console.log('服务器端接收到数据'+data);
            res.end();
        });
    }
}).listen(1337,"127.0.0.1");