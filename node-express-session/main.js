var express = require('express');
var session = require('express-session');
var app = express();
//var random = require("random");

var server = app.listen(3000,  "127.0.0.1", function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
   
  });


app.use(session({name: "gerry-sid", resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 60000 }}));

// the following code gets executed for every request
app.use(function(req,res,next) {
    console.log("gerry kovan"); 

    // calls the next function which is based on the request
    next();  
});

var sessionData
app.get('/set_session',function(req,res){
  sessionData = req.session;
  sessionData.user = {};
  let username = "adam";
  sessionData.user.username = username;
  sessionData.user.salary = 100; //random.int(55, 956);
   console.log("Setting session data:username=%s and salary=%s", username, sessionData.user.salary)
 
 // res.end('Saved session and salary : ' + sessionData.username);
 res.json(sessionData.user)
});

app.get('/gerry', function(req,res) {
   sessionData = req.session;
   let mySalary = sessionData.user.salary;
   mySalary++;
   sessionData.user.salary = mySalary;
   res.json(sessionData.user);
});

app.get('/destroysession',function(req,res){
    sessionData = req.session;
    
    sessionData.destroy(function(err) {
        if(err){
            msg = 'Error destroying session';
            res.json(msg);
        }else{
            msg = 'Session destroy successfully';
            console.log(msg)
            res.json(msg);
        }
    });
});