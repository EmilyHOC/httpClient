var http=require('http');
var options={
    hostname:'www.taobao.com',
    port :80,
    path:'/',
    method:'GET'
};
var req=http.request(options,function (res) {
    console.log('状态码:'+res.statusCode);
    console.log('响应头:'+JSON.stringify(res.headers));
    res.on('data',function (chunk) {
        console.log('响应内容:'+chunk);
    });
});
req.end();