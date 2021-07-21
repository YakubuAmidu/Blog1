var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var _ = require('lodash');

var homeStartingContent =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ';

var aboutContent =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ';

var contactContent =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ';

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var posts = [];

app.get('/', function (req, res) {
  res.render('Home', { startingContent: homeStartingContent, posts: posts });
});

app.get('/about', function (req, res) {
  res.render('about', { aboutingContent: aboutContent });
});

app.get('/contact', function (req, res) {
  res.render('contact', { contactingContent: contactContent });
});

app.get('/compose', function (req, res) {
  res.render('compose');
});

app.post('/compose', function (req, res) {
  var post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };

  posts.push(post);
  res.redirect('/');
});

app.get('/posts/:postName', function (req, res) {
  var requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function (post) {
    var storeTitle = _.lowerCase(post.title);
    if (storeTitle === requestedTitle) {
      console.log('Match found');
    }
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
