const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

router.get('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

router.get('/contact-us',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views' , 'contact-us.html'))
})

router.get('/success',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views' , 'success.html'))
})


module.exports = router;