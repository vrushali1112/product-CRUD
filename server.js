var express = require("express");
var config = require('./config/appConfig')
var app = express();
var cors = require('cors')
app.use(cors())


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./dbHandler')

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
    );
    next();
  });

  // use express router
var router = express.Router();

//controllers
var categoryRoutes = require("./controllers/categoryController");


app.use("/Category", router);


//call  routing
categoryRoutes(router); 


const port = config.PORT;

app.listen( port, (req, res) => {
    console.log(`Server is running on ${port} port.`);
  });