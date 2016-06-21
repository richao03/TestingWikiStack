var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');

var swig = require('swig');
var path = require('path');
module.exports = app;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
//takes urlencoded strings and parse into json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//these are the files app.js is being connected to
app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/users'));

app.get('/', function (req, res) {
   res.render('index');
});
//having 4 arguments signals that this is an error middleware
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});