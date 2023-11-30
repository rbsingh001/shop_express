const path = require('path');
const products = []

const rootDir = require('../utils/path');
// console.log('hello');
// console.log(rootDir);

exports.getAddProduct = (req, res, next)=>{

    res.sendFile(path.join(rootDir, 'views','add-product.html'))
} 

exports.postAddProduct = (req, res, next)=>{

    products.push({title : req.body.title});
    console.log(req.body)
    res.redirect('/')
}
