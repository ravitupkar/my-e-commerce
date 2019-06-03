const express = require('express');
const adminController = require('../controllers/adminControl');
const adminrouter = express.Router();

adminrouter.use('/admin/dashboard', (req, res) =>{
    res.render('admin/dashboard.ejs');
});

adminrouter.use('/admin/login', adminController.login );

adminrouter.use('/admin/register', adminController.register );

adminrouter.use('/admin/profile', adminController.profile);

adminrouter.use('/admin/about',adminController.about);

adminrouter.use('/admin/services', adminController.services);

adminrouter.use('/admin/products', adminController.products);

adminrouter.use('/admin/product-add', adminController.productadd);

adminrouter.use('/admin/product-save', adminController.productsave);

adminrouter.use('/admin/product-edit/:id', adminController.productedit);

adminrouter.use('/admin/product-update/:id', adminController.productupdate);

adminrouter.use('/admin/product-delete/:id', adminController.productdelete);

adminrouter.use('/admin/blog', adminController.blog);

adminrouter.use('/admin/blog-add', adminController.blogadd);

adminrouter.use('/admin/blog-edit', adminController.blogedit);

adminrouter.use('/admin/blog-details', adminController.blogDetails);

adminrouter.use('/admin/products-details', adminController.productsDetails);

adminrouter.use('/admin/contact', adminController.contact);

module.exports = adminrouter;