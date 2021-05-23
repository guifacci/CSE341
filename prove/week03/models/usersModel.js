const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    userPassword: String, 
});

module.exports = mongoose.model('Users', userSchema);