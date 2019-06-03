const express = require('express');
const webController = require('../controllers/webControl');

const webrouter = express.Router();

webrouter.use('/login', webController.login );

webrouter.use('/register', webController.register );

webrouter.use('/about', webController.about);

webrouter.use('/services', webController.services);

webrouter.use('/products', webController.products);

webrouter.use('/products-details', webController.productsDetails);

webrouter.use('/blog', webController.blog);

webrouter.use('/blog-details', webController.blogDetails);

webrouter.use('/contact', webController.contact);

webrouter.use('/', webController.home);

module.exports = webrouter;