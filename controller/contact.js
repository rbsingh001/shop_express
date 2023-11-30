const path = require('path');
const contact = [];

const rootDir = require('../utils/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views' , 'contact-us.html'))
}

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views' , 'success.html'))
}