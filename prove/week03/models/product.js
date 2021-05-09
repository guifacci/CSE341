const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data', 'inventory.json');

const getBooksFromFile = (cb) => {
        fs.readFile(p, (err, fileContent) => {
            if(err){
                cb([]);
            }else{
                cb(JSON.parse(fileContent));
            }
        });
}

module.exports = class Books{
    constructor(bookTitle, bookSummary){
        this.bookTitle = bookTitle;
        this.bookSummary = bookSummary;
    }

    add(){
        //booksArray.push(this);
        getBooksFromFile(books => {
            books.push(this);
            fs.writeFile(p, JSON.stringify(books), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        getBooksFromFile(cb);
        //return booksArray;
    }
};