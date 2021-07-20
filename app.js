var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

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

app.get('/', function (req, res) {
  res.render('Home', { startingContent: homeStartingContent });
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

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
