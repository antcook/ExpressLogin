var express      = require('express');
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var path         = require('path');

var app = express();

// DATABASE
// ==============================================

mongoose.connect('mongodb://localhost/blog');

// SET VIEW ENGINE
// ==============================================

app.set('view engine', 'hbs');

// CONFIGURATION
// ==============================================

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'PoWfMGmk5c8OOcNjySXA', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// AUTHENTICATION
// ==============================================

require('./auth')(passport);

// ROUTES
// ==============================================

require('./routes/index')(app);
require('./routes/profile')(app);
require('./routes/user')(app, passport);

// ROUTES
// ==============================================

app.listen(3000);