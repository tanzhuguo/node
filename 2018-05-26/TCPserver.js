//创建 TCP 服务器端
var net = require ("net");
var server = net.createServer(function(socket){
	//新的链接
	socket.on('data',function(data){
		socket.write("你好");
	});
	socket.on('end',function(){
		console.log("断开链接");
	});
	socket.write("欢迎");
});
server.listen(8124,function(){
	console.log('server bound');
});