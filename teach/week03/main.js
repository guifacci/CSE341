const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");

const adminData = require('./routes/ta03');

const APP = express();

APP.use(adminData);


APP.set('view engine', 'ejs');
APP.set('views', 'views');

const { request, response } = require('express');

APP.use(express.urlencoded({extended: false}));

APP.listen(3000);