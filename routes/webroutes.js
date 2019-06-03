const express = require('express');
const webController = require('../controllers/webControl');

const webrouter = express.Router();

webrouter.use('/login', webController.login );

webrouter.use('/register', webController.register );

webrouter.use('/about', webController.about);

webrouter.use('/services', webController.services);

webrouter.use('/products/:cat', webController.products);


webrouter.use('/products', webController.productsAll);

webrouter.use('/product-add', webController.productAdd);

webrouter.use('/product-save', webController.productsave);

webrouter.use('/product-edit/:id', webController.productEdit);

webrouter.use('/product-update/:id', webController.productupdate);

webrouter.use('/products-details/:id', webController.productsDetails);

webrouter.use('/blog', webController.blog);

webrouter.use('/blog-details', webController.blogDetails);

webrouter.use('/contact', webController.contact);

webrouter.use('/contactSave', webController.contactSave);

webrouter.use('/', webController.home);

module.exports = webrouter;