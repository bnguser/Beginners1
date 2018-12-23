const express = require('express');
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
	res.send(req["params"]["name"]);
})


app.listen(3000,function(error){
	if(error==true){
		console.log('some error occured');
	}else{
		console.log("listening on port");
	}
})