var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id" : 4
    }
}

//POST route to add a user
app.post('/addUser' , function(req,res){
    //Read current users from file
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//GET route to get all users
app.get('/listUsers', function (req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8',function (err,data){
        console.log(data);
        res.end(data);
    });
})

app.get('/:id', function (req,res){
    //Read current users from file
    fs.readFile(__dirname + "/" + "users.json", "utf8" , function (err,data){
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

var server = app.listen(8081, function(){

    var host = server.address().address
    var port = server.address().port

    console.log("App running at http://%s%s", host,port)
})