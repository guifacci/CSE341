const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data', 'inventory.json');
const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Books{
    constructor(bookTitle, bookSummary, bookPrice, bookId){
        this.bookTitle = bookTitle;
        this.bookSummary = bookSummary;
        this.bookPrice = bookPrice;
        this.bookId = bookId;
    }
    saveToDB(){
        var idNumber = Date.now();
        this.bookId = idNumber.toString();
        const db = getDb();
        return db.collection('books').insertOne(this).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    }

    static fetchAll(){
        const db = getDb();
        return db.collection('books').find().toArray().then(books => {
            console.log(books);
            return books;
        }).catch(err => {
            console.log(err);
        });
    }
    static getBookById(bookId){
        const db = getDb();
        return db
        .collection('books')
        .find({_id: new mongodb.ObjectId(bookId)})
        .next()
        .then(book => {
            console.log(book); return book;
        })
        .catch(err => {
            console.log(err);
        });
    }
}

const getBooksFromFile = async (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });

}



// module.exports = class Books{
//     constructor(bookTitle, bookSummary, bookPrice, bookId){
//         this.bookTitle = bookTitle;
//         this.bookSummary = bookSummary;
//         this.bookPrice = bookPrice;
//         this.bookId = bookId;
//     }

//     add(){
//         var idNumber = Date.now();
//         this.bookId = idNumber.toString();
        
//         getBooksFromFile(books => {
//             books.push(this);
//             fs.writeFile(p, JSON.stringify(books), (err) => {
//                 console.log(err);
//             });
//         });
        
//     }

//     static fetchAll(cb){
//         getBooksFromFile(cb);
//     }

//     static isValidId(id){
//         return id.bookId === id;
//     }

//     static getBookById(bookId, cb){
//         getBooksFromFile(books => {
//             const book = books.find(p => p.bookId ===  bookId);
//             cb(book);
//         })
//     }
//};

module.exports = Books;