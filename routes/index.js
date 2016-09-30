
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family', message : 'I love my family' });
});
router.get('/family', function(req, res, next) {
  res.render('family', { title: 'My Family', message : 'I love my family' });
});
router.get('/myself', function(req, res, next) {
  res.render('myself', { title: 'My Family', message : 'I am jahnavee parmar' });
});

router.get('/mom', function(req, res, next) {
  res.render('mom', { title: 'My Family', message : 'My mother name is Anjali Parmar. She is teacher in india' });
});
router.get('/dad', function(req, res, next) {
  res.render('dad', { title: 'My Family', message : 'My father name is Devendra Parmar. he is business man in india' });
});
module.exports = router;
