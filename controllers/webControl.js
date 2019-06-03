const mongoose = require('mongoose');
const uri = "mongodb+srv://ravitupkar01:ravitupkar01@cluster0ravi-flkid.mongodb.net/shop?retryWrites=true";

 
var Products = require('../models/productModel');
 
mongoose.connect(uri,  { useNewUrlParser: true }, function (err) {
    if (err) throw err;
//    console.log('Successfully connected');
});

exports.login = (req, res) =>{
    res.render('login.ejs');
}

exports.register = (req, res) =>{
    res.render('register.ejs');
}

exports.about  = (req, res) =>{
    res.render('about.ejs');
}

exports.services  = (req, res) =>{
    res.render('services.ejs');
}

exports.products  = (req, res) =>{
    // Products.find({}, function(err, products) {
    //     if (err) throw err;
    //     console.log(products);
    //     res.render('products.ejs', {
    //         products : products
    //     });
    //   });
    res.render('products.ejs');
}

exports.productsDetails  = (req, res) =>{
    res.render('products-details.ejs');
}

exports.blog  = (req, res) =>{
    res.render('blog.ejs');
}

exports.blogDetails  = (req, res) =>{
    res.render('blog-details.ejs');
}

exports.contact  = (req, res) =>{
    res.render('contact.ejs');
}

exports.about  = (req, res) =>{
    res.render('about.ejs');
}

exports.about  = (req, res) =>{
    res.render('about.ejs');
}

exports.home  = (req, res) =>{
    res.render('index.ejs');
}