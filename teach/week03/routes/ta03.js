//TA03 PLACEHOLDER
const express = require('express');
const http = require('http');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('../views/home');
});

function readJson(request, response){
    const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
}

http.get(url, function(response){
    var body = "";
    response.on('data')
});


module.exports = router;