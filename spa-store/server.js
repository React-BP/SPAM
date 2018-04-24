const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 8080;

const routeUser = require('./controllers/userController');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));


// mongoose.connect( "mongodb://localhost:27017/store");


// Add routes, both API and view
app.use(routes);
app.use(routeUser);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/store");

var db = mongoose.connection;
// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});