const Books = require('../models/product');

exports.getAddBooksPage = (request, response, next)=>{
    response.render('add-books',  {pageTitle: 'Title For Books' });
};

exports.postAddBooksProcess = (request, response, next)=>{
        const book = new Books(request.body.bookTitle, request.body.bookSummary, request.body.bookPrice, request.body.bookId);
        book.saveToDB().then(result => {
            console.log('Product created.')
            response.redirect('/');
        }).catch(err => {console.log(err);});
        //response.redirect('/');


};
//Maybe I need to change this to Books.fetchAll().then(books =>{response.render('home', {books: books});}).catch(err => {console.log(err);})
exports.getHomePage = (request, response, next)=>{
    Books.fetchAll().then(books =>{response.render('home', {books: books});}).catch(err => {console.log(err);});
};

exports.getBook = (request, response, next) => {
    const bookId = request.params.bookId;

    Books.getBookById(bookId).then(book => {
        response.render('product-details', {book: book});
    })
    .catch(err => {
        console.log(err);
    });
};