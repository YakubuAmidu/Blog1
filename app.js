var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('Home');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
