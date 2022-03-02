var express = require("Express");
var app = express();

//This responds with "Hello World" on the homepage.
app.get('/', function(request, response){
    console.log("There is GET request for the homepage!");
    response.send('Here is the GET Method!');
});

//This responds with a POST request for the homepage.
app.get('/post', function(request, response){
    console.log("A POST request for the homepage is accessed.");
    response.send('Here is the POST Method!');
});

//This responds with a GET request for the /list_user page.
app.get('/list_user', function(request, response){
    console.log("Got a GET request for /list_user.");
    response.send('This is Page Listing');
});

//This responds with a GET request for abcd, abxcd, ab123cd, and so on.
app.get('/ab*cd', function(request, response){
    console.log("Got a GET request for /ab*cd.");
    response.send('Pattern Match Page');
});

var server = app.listen(4900, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
});