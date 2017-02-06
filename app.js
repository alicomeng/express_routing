const express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index');
});
//repeat hello 3 times
app.get('/:greeting/:ti', function (req, res) {
  var num = Number(req.params.ti);
  var msg = req.params.greeting;
  var greetings ='';
  for (var i = 0; i < num; i++) {
    greetings += msg + ' ';
  }
  var posts = [
    {title:'Art of War', author:'Yousif Hashem'},
    {title:'Becan of light', author:'Hashem Tayeh'},
    {title:'Fragel Life', author:'Sheeren Tayeh'},
    {title:'Modren city planning', author:'Adam El Selman'},

  ];
  res.render('greeting', {greetings: greetings, msg:msg, posts:posts});
});

app.get('/', function (req, res) {
  res.render('index');
})
app.get('/ali', function (req, res) {
  res.render('ali');
})
// catch all other undifined requests with 404
app.get('*', function (req, res) {
  res.send('404 PAGE NOT FOUND!');
});


app.listen(3000, function () {
  console.log("server running at port 3000");
});
