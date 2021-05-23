const { response } = require('express');
const Books = require('../models/product');


exports.getAddBooksPage = (request, response, next)=>{
    response.render('add-books',  {pageTitle: 'Title For Books', isAuthenticated: request.isLoggedIn });
};

exports.postAddBooksProcess = (request, response, next)=>{
        //const book = new Books(request.body.bookTitle, request.body.bookSummary, request.body.bookPrice, request.body.bookId);
        const bookTitle = request.body.bookTitle;
        const bookSummary = request.body.bookSummary;
        const bookPrice = request.body.bookPrice;
        
        const book = new Books({bookTitle: bookTitle, bookSummary: bookSummary, bookPrice: bookPrice})
        //book.saveToDB().then(result => {
        book.save().then(result => {
            console.log('Product created.')
            response.redirect('/');
        }).catch(err => {console.log(err);});

};
exports.getHomePage = (request, response, next)=>{
    //Books.fetchAll().then(books =>{response.render('home', {books: books});}).catch(err => {console.log(err);});
    Books.find()
    .then(books =>{
        console.log(books);
        response.render('home', {books: books, isAuthenticated: request.isLoggedIn});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getBook = (request, response, next) => {
    const bookId = request.params.bookId;
    //Books.getBookById(bookId)
    Books.findById(bookId).then(book => {
        response.render('product-details', {book: book, isAuthenticated: request.isLoggedIn});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getEditBook = (request, response, next) => {
    const bookId = request.params.bookId;
    //Books.getBookById
    Books.findById(bookId).then(book => {
        response.render('edit-product', {book: book, isAuthenticated: request.isLoggedIn});
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.bookId;
    const updatedTitle = req.body.bookTitle;
    const updatedPrice = req.body.bookPrice;
    const updatedSummary = req.body.bookSummary;
    
    Books.findById(prodId)
      .then(product => {
        product.bookTitle = updatedTitle;
        product.bookSummary = updatedSummary;
        product.bookPrice = updatedPrice;
        return product.save();
      })
      .then(result => {
        console.log('UPDATED PRODUCT!');
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };

exports.postDeleteBook = (request, response, next) => {
    const bookId = request.body.bookId;
    //Books.delete(bookId)
    Books.findByIdAndRemove(bookId)
    .then(() => {
        response.render('delete-confirmation', {isAuthenticated: request.isLoggedIn});
        return book.destroy();
    })
    .then(result => {
        console.log('Book Deleted');
        response.redirect('/delete-confirmation');
    })
    .catch(err => {
        console.log(err);
    });
}

exports.getDeleteConfirmation = (request, response, next) => {
    Books.find()
    .then(books =>{
        console.log(books);
        response.render('delete-confirmation', {books: books, isAuthenticated: request.isLoggedIn});
    })
    .catch(err => {
        console.log(err);
    });
}


