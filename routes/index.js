var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/BookReader',function(req,res,next)
{
res.render('BookReader');
})

module.exports = router;
