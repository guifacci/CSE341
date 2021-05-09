const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/errorPage');


const adminRoutes = require('./routes/admin');

const APP = express();

APP.use(adminRoutes);


APP.set('view engine', 'ejs');
APP.set('views', 'views');

//Also a midleware function that resides within another file.
const { request, response } = require('express');

//Parsing of the body of incoming requests
APP.use(express.urlencoded({extended: false}));

APP.use(errorController.get404);


APP.listen(3000);