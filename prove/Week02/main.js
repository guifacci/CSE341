const express = require('express');
const bodyParser = require('body-parser');


const adminData = require('./routes/admin');

const APP = express();

APP.use(adminData);


APP.set('view engine', 'ejs');
APP.set('views', 'views');
//Also a midleware function that resides within another file.
//const admin = require('./routes/admin');

const { request, response } = require('express');

//Parsing of the body of incoming requests
APP.use(express.urlencoded({extended: false}));



//Calling middleware function from another directory
//APP.use('/admin', adminData.router);

//Function to handle every incoming request. Next, a function that will be passed and executed. It allows the request to go to the next piece of logic.
//Response
// APP.use('/', (request, response, next) => {
//     response.render('home.ejs');
// });

// APP.use('/addBook',(request, response, next) => {
//     response.render('add-books.ejs')
// })

APP.listen(3000);