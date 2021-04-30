const express = require('express');
//Use this to import html file. Feature that is part of express.
const path = require('path');

const router = express.Router();
const usersArray = [];

//Using APP constant as request handler.
router.get('/addUser', (request, response, next) => {
    response.send(
        '<html><h1>Adding a new user in progress...</h1><br><head><title>Enter User:  </title><head><body><h4>Enter new name: </h4></body><body><form action="/admin/users" method="POST"><input type="text" name="username"><button type ="submit">Submit</button></form></body>');
       //response.sendFile(path.join(__dirname, '../', 'views', 'add-user.html)); //Use this one to send a html page from another file instead of just the chunck of html from the line above.
});

//Handle new users
router.post('/users', (request, response, next) => {
    console.log(request.body);
    const newUser = request.body.newUser;
    usersArray.push(newUser);
    console.log(usersArray[0]);
    response.redirect('/');
});

//Delete users
router.post('/rmvUser', (request, response, next) => {
    const rmUser = request.body.rmUser;
    
    const index = usersArray.indexOf(rmUser);

    if(index !== -1){
        usersArray.splice(index, 1);
    }

    response.redirect('/');
});

router.get('/', (request, response, next)=> {
    response.render('add-users.ejs', {
        users: usersArray
    });
});

//module.exports = router;
exports.users = usersArray;
exports.router = router;