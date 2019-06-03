const mongoose = require('mongoose');
const uri = "mongodb+srv://ravitupkar01:ravitupkar01@cluster0ravi-flkid.mongodb.net/shop?retryWrites=true";

 
var Products = require('../models/productModel');
 
mongoose.connect(uri,  { useNewUrlParser: true }, function (err) {
    if (err) throw err;
//    console.log('Successfully connected');
});

exports.login = (req, res) =>{
    res.render('admin/login.ejs');
}

exports.register = (req, res) =>{
    res.render('admin/register.ejs');
}

exports.profile = (req, res) =>{
    res.render('admin/profile.ejs');
}

exports.about = (req, res) =>{
    res.render('admin/about.ejs');
}

exports.services = (req, res) =>{
    res.render('admin/services.ejs');
}

exports.products = (req, res) =>{
    Products.find({}, function(err, products) {
    if (err) throw err;
    // console.log(products);
    res.render('admin/products.ejs', {
        products : products
    });
  });
    
}

exports.productadd = (req, res) =>{
    res.render('admin/product-add.ejs');
}

exports.productsave = (req, res, next) =>{
    // console.log(req.body.product_sku);
    // console.log(req.body);

    var productsaveitem = new Products({
        _id: new mongoose.Types.ObjectId(),
        product_sku: req.body.product_sku,
        product_name: req.body.product_name,
        product_old_price: req.body.product_old_price,
        product_dis_price: req.body.product_dis_price,
        product_desc: req.body.product_desc,
        product_picture: req.body.product_picture,
        product_star: req.body.product_star,
        product_highlights: {
            fabric: req.body.fabric,
            pattern : req.body.pattern,
            type : req.body.type,
            fit : req.body.fit
        }
    });
    
    productsaveitem.save(function(err) {
        if (err) throw err;
        console.log('Product successfully saved.');
        res.redirect('/admin/product-add');
    });
}

exports.productedit = (req, res) =>{

    // res.render('admin/product-edit.ejs');
    console.log(req.params.id);
    Products.findById(req.params.id, function (err, product) {
        console.log(product); 
        res.render('admin/product-edit.ejs',{
            product : product
        });
    });
}
exports.productdelete = (req, res) =>{

    // res.render('admin/product-edit.ejs');
    console.log(req.params.id);
    Products.findByIdAndRemove(req.params.id, function (err, product) {
        res.redirect('/admin/products');
    });
}

exports.productupdate = (req, res) =>{

    // res.render('admin/product-edit.ejs');
    console.log(req.params.id);
    Products.findByIdAndUpdate(req.params.id, 
        {
            $set :{
                product_sku: req.body.product_sku,
                product_name: req.body.product_name,
                product_old_price: req.body.product_old_price,
                product_dis_price: req.body.product_dis_price,
                product_desc: req.body.product_desc,
                product_picture: req.body.product_picture,
                product_star: req.body.product_star,
                product_highlights: {
                    fabric: req.body.fabric,
                    pattern : req.body.pattern,
                    type : req.body.type,
                    fit : req.body.fit
                },

            }
        },
        
        function (err, product) {
        console.log(product); 
        res.render('admin/product-edit.ejs',{
            product : product
        });
    });
}



exports.blog = (req, res) =>{
    res.render('admin/blog.ejs');
}

exports.blogadd = (req, res) =>{
    res.render('admin/blog-add.ejs');
}

exports.blogedit = (req, res) =>{
    res.render('admin/blog-edit.ejs');
}

exports.blogDetails = (req, res) =>{
    res.render('admin/blog-details.ejs');
}

exports.productsDetails = (req, res) =>{
    Products.find({}, function(err, products) {
        if (err) throw err;
        console.log(products);
        res.render('admin/products-details.ejs' , {
            products : products
        });
      });
        
    res.render('admin/products-details.ejs');
}

exports.contact = (req, res) =>{
    res.render('admin/contact.ejs');
}