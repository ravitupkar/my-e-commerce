const mongoose = require('mongoose');
const uri = "mongodb+srv://ravitupkar01:ravitupkar01@cluster0ravi-flkid.mongodb.net/shop?retryWrites=true";

 
var Products = require('../models/productModel');

var Contact = require('../models/contactModel');
 
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
    console.log(req.params.cat);
    Products.find({ product_cat: req.params.cat }, function(err, products) {
        if (err) throw err;
        console.log(products);
        res.render('products.ejs', {
            products : products
        });
      });
    // res.render('products.ejs');
}

exports.productsAll  = (req, res) =>{
    Products.find({ }, function(err, products) {
        if (err) throw err;
        console.log(products);
        res.render('products.ejs', {
            products : products
        });
      });
    // res.render('products.ejs');
}

exports.productAdd = (req, res) =>{
    res.render('admin/product-add.ejs');
}

exports.productEdit = (req, res) =>{
    console.log(req.params.id);
    Products.findById(req.params.id, function (err, product) {
        console.log(product); 
        res.render('admin/product-edit.ejs',{
            product : product
        });
    });
}



exports.productupdate = (req, res) =>{

    // res.render('admin/product-edit.ejs');
    console.log(req.params.id);
    console.log(req.body);
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
                product_cat: req.body.product_cat,
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
        res.redirect('/products');
    });
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
        product_cat: req.body.product_cat,
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
        res.redirect('/product-add');
    });
}
exports.productsDetails  = (req, res) =>{
    console.log(req.params.id);
    Products.findById(req.params.id, function (err, product) {
        console.log(product); 
        res.render('products-details.ejs' ,{
            product : product
        });
    });
    // res.render('products-details.ejs');
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

exports.contactSave  = (req, res) =>{

    console.log(req.body);
    res.send(req.body);

    var ContactSave = new Contact({
        _id: new mongoose.Types.ObjectId(),
        contact_name: req.body.contactusername,
        contact_email: req.body.contactemail,
        contact_message: req.body.contactcomment,
    });
    
    ContactSave.save(function(err) {
        if (err) throw err;
        console.log('Product successfully saved.');
        res.redirect('/contact');
    });
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