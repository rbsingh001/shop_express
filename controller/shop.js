const path = require('path');
const contact = [];

const rootDir = require('../utils/path');

exports.home = (req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
}