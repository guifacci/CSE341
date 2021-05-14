const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://guifacci:f181215F!@cluster0.q1ahc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
        .then(client => {
            console.log("Connected.");
            _db = client.db();
            callback();
        }).catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found.';
}

//module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
