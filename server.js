var express=require("express");
var app=express();
var port=process.env.PORT || 3000

var mongoose= require("mongoose");
var contact= require("./model/contact")
var bodyparser=require("body-parser");

ongoose.connect("mongodb://localhost/contactlist",function(){

	console.log("successfully connected with mongo db")
});
app.use(express.static(__dirname+"/public"))
app.use(bodyparser.json());
app.get("/contactList",function(req,res){

contact.getContacts(functio(err,data){
	if(err){
           throwerr;
           console.log(data);
       }
       res.json(data);
   })
})
app.post("/contacList",function(req,res){

var body=req.body;
contact.addContact(body,function(err,data){

	if(err){
throw err;}
res.json(data);

})


})

app.get("/contactList/:id",function(err,data){

if(err){
	throw err;
}
res

}



})

app.listen(port,function(){
	console.log("server is listing at port 3000"+port);
})





})