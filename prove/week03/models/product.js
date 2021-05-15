const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    bookTitle: String,
    bookPrice: Number, 
    bookSummary: String
});

// const fs = require('fs');
// const path = require('path');
// const p = path.join(path.dirname(process.mainModule.filename),'data', 'inventory.json');
// const getDb = require('../util/database').getDb;
// const mongodb = require('mongodb');
// const ObjectId = mongodb.ObjectId;

// class Books{
//     constructor(bookTitle, bookSummary, bookPrice, id){
//         this.bookTitle = bookTitle;
//         this.bookSummary = bookSummary;
//         this.bookPrice = bookPrice;
//         this._id = id ? new mongodb.ObjectId(id) : null;
//     }
//     saveToDB(){
//         const db = getDb();
//         let dbOperation;
//         if(this._id){
//             dbOperation = db.collection('books').updateOne({_id: this._id}, {$set: this});
            
//         }else{
//             dbOperation = db.collection('books').insertOne(this);
//         }
//         return dbOperation
//         .then(result => {
//             console.log(result);
//         }).catch(err => {
//             console.log(err);
//         });
//         // return db.collection('books').insertOne(this).then(result => {
//         //     console.log(result);
//         // }).catch(err => {
//         //     console.log(err);
//         // });
//     }

//     static fetchAll(){
//         const db = getDb();
//         return db.collection('books').find().toArray().then(books => {
//             console.log(books);
//             return books;
//         }).catch(err => {
//             console.log(err);
//         });
//     }
//     static getBookById(bookId){
//         const db = getDb();
//         return db
//         .collection('books')
//         .find({_id: new mongodb.ObjectId(bookId)})
//         .next()
//         .then(book => {
//             console.log(book); return book;
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }
//     static delete(bookId){
//         const db = getDb();
//         return db.collection('books')
//         .deleteOne({
//             _id: new mongodb.ObjectId(bookId)
//         })
//         .then(result => {
//             console.log('Deleted')
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }
// }

// const getBooksFromFile = async (cb) => {
//     fs.readFile(p, (err, fileContent) => {
//         if(err){
//             cb([]);
//         }else{
//             cb(JSON.parse(fileContent));
//         }
//     });

// }



// // module.exports = class Books{
// //     constructor(bookTitle, bookSummary, bookPrice, bookId){
// //         this.bookTitle = bookTitle;
// //         this.bookSummary = bookSummary;
// //         this.bookPrice = bookPrice;
// //         this.bookId = bookId;
// //     }

// //     add(){
// //         var idNumber = Date.now();
// //         this.bookId = idNumber.toString();
        
// //         getBooksFromFile(books => {
// //             books.push(this);
// //             fs.writeFile(p, JSON.stringify(books), (err) => {
// //                 console.log(err);
// //             });
// //         });
        
// //     }

// //     static fetchAll(cb){
// //         getBooksFromFile(cb);
// //     }

// //     static isValidId(id){
// //         return id.bookId === id;
// //     }

// //     static getBookById(bookId, cb){
// //         getBooksFromFile(books => {
// //             const book = books.find(p => p.bookId ===  bookId);
// //             cb(book);
// //         })
// //     }
// //};

// module.exports = Books;
module.exports = mongoose.model('Books', productSchema);