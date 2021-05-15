const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/errorPage');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: "https://git.heroku.com/faccinetto-g-prove03.git",
    optionsSuccessStatus: 200
};


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://guifacci:f181215F!@cluster0.q1ahc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const adminRoutes = require('./routes/admin');
//const mongoConnect = require('../week03/util/database').mongoConnect;
const mongoose = require('mongoose');
const APP = express();

APP.use(adminRoutes);
APP.use(cors(corsOptions));


APP.set('view engine', 'ejs');
APP.set('views', 'views');

//Also a midleware function that resides within another file.
const { request, response } = require('express');

//Parsing of the body of incoming requests
APP.use(express.urlencoded({extended: false}));

APP.use(errorController.get404);





// mongoConnect(()=>{
    
//     APP.listen(3000);
// });

mongoose.connect(MONGODB_URL, options)
.then(result => {
    APP.listen(PORT);
})
.catch(err => {
    console.log(err);
});