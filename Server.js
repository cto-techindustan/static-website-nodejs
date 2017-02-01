var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.set('view engine', 'pug');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render('index', { title: 'Home' });
});

router.get("/about",function(req,res){
  res.render('about', { title: 'About' });
});

router.get("/contact",function(req,res){
  res.render('contact', { title: 'Contact Us' });
});

app.use("/",router);

app.use("*",function(req,res){
  res.render('404', { title: '404 - Not found' });
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});