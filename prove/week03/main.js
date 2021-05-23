const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/errorPage');
const Users = require('./models/usersModel');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
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
const userRoutes = require('./routes/usersRoutes');
//const mongoConnect = require('../week03/util/database').mongoConnect;

const APP = express();
const store = new MongoDBStore({
    uri: 'mongodb+srv://guifacci:f181215F!@cluster0.q1ahc.mongodb.net/myFirstDatabase',
    collection: 'sessions'
});

APP.use((request, response, next)=>{
    Users.findById('60a5d24ef0510f26888ea3c3')
    .then(user=>{
        request.user = user;
        next();
    })
    .catch(err => console.log(err))
});

APP.use(adminRoutes);
APP.use(userRoutes);
APP.use(cors(corsOptions));


APP.set('view engine', 'ejs');
APP.set('views', 'views');

//Also a midleware function that resides within another file.
const { request, response } = require('express');

//Parsing of the body of incoming requests
APP.use(express.urlencoded({extended: false}));
APP.use(session({secret: 'My secret', resave: false, saveUninitialized: false, store: store}));
APP.use(errorController.get404);

mongoose.connect(MONGODB_URL, options)
.then(result => {
    Users.findOne()
    .then(user => {
        if(!user){
            const user = new Users({
                userName: 'gui@gmail.com', 
                userPassword: 'plaintext.Iknow'
            });
            user.save();
        }
    });
    APP.listen(PORT);
})
.catch(err => {
    console.log(err);
});