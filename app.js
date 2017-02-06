const express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
  res.send('Welcome to my ExpressJS routing assignment home page')
});

app.get('/speak/pig', function (req, res) {
  res.send('The pig says Oink!');
});

app.get('/speak/cow', function (req, res) {
  res.send('The cow says Moo!');
});

app.get('/speak/dog', function (req, res) {
  res.send('The dog says Woof..Woof!!');
});
*/
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
  res.render('greeting.ejs', {greetings: greetings, msg:msg, posts:posts});
});

app.get('/', function (req, res) {
  res.render('index.ejs')
})
// 404
app.get('*', function (req, res) {
  res.send('404 PAGE NOT FOUND!');
});


app.listen(3000, function () {
  console.log("server running at port 3000");
});
