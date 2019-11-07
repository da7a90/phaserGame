
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const http = require('http');

//using body parser to process requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





//using the folder that holds our static files
app.use(express.static(__dirname+"/assets"));
//route to get a list of users

//login route
app.get("/", (req, res) => {
   
      res.sendFile(__dirname+"/part10.html");
  }
  );
//the admin space route


app.listen(9500, () => {
    console.log("Server is listening on port 9500");
});


