const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const productConstroller = require('../controllers/products');
const { response } = require('express');

//const router = express.Router();
const router = express();


router.use(express.urlencoded({extended: false}));

// //Home page
router.get('/', productConstroller.getHomePage);
// //Add books page
router.get('/books', productConstroller.getAddBooksPage);
// //Handles item's id submission
router.get('/books/:bookId', productConstroller.getBook);
// //Handle form submition
router.post('/add-books', productConstroller.postAddBooksProcess);
// //Handle the editing of an item
router.get('/edit-product/:bookId', productConstroller.getEditBook);
// //Get the data to be modifyded
router.post('/edit-product', productConstroller.postEditProduct);
// //Handles the deletion of an item
router.post('/delete-product', productConstroller.postDeleteBook);
//Deleting confirmation
router.get('/delete-confirmation', productConstroller.getDeleteConfirmation);

module.exports = router;