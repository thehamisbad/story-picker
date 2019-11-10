var express = require('express');
var router = express.Router();
var data = require('./data');

router.use(express.static('dist'));

router.use('/data', data);

router.get('/', (req, res) => {
    res.render('layout');
});

module.exports = router;