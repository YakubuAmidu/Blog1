var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var homeStartingContent =
  'uehfuehuwuhehfueufhuef iehrfeha u8eierhdef ihfeuf aeuuf hueuhea fuueua uebfuahfueheu uebreuiaheuueuha uereuaeaheuea aeuuhrehuuaheue euruehauehue euuhreuahreur eurhehauerhu ueuhrueuauehr';

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('Home', { startingContent: homeStartingContent });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
