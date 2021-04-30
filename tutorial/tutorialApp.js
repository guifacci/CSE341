const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const APP = express();

APP.set('view engine', 'ejs');
APP.set('views', 'views');
//Also a midleware function that resides within another file.
//const admin = require('./routes/admin');
const adminData = require('./routes/admin');
const { request, response } = require('express');

//Parsing of the body of incoming requests
APP.use(bodyParser.urlencoded({extended: false}));

//Calling middleware function from another directory
//APP.use('/admin',admin);
APP.use('/admin', adminData.router);

//Function to handle every incoming request. Next, a function that will be passed and executed. It allows the request to go to the next piece of logic.
//Response
APP.use('/', (request, response, next) => {
    console.log(adminData.users);
    response.send(
    '<h1>Express learning in progress...</h1><br><p><%= users %></p>');
});

APP.use((request, response, next) => {
    response.render()
})

APP.listen(3000);