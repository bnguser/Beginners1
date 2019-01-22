/*const express = require('express');
const app = express();
// const message = require('./message.js');
// let all_letters = '';

// console.log(message["letters"]);


app.get("/",function(request,response){
	// for(i=0; i<= message["letters"].length -1 ; i++){
	// 	all_letters += message["letters"][i] + "<br/>";
	// }
	response.send("Hello world");

})

app.get("/users/:name",function(req,res){
	resq.send(req["params"]["name"]);
})


app.listen(3000,function(error){
	if(error==true){
		console.log('some error occured');
	}else{
		console.log("listening on port");
	}
})*/
const http = require('http');
const fs = require('file-system');

http.createServer(function(req, res){
	let file = fs.readFileSync('.'+req['url'] + '.txt','utf8');
	res.write(file);
res.end();
}).listen(3000);