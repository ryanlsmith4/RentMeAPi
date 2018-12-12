
require('dotenv').config();

const methodOverride = require('method-override');
var cookieParser = require('cookie-parser');

const express = require('express');
const app = express();
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/rent-me', { useNewUrlParser: true });

app.use(cookieParser());

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

module.exports = app;




const rentals = require('./controllers/routes');
const users = require('./controllers/auth');

app.use('/user', users);
app.use('/listing', rentals);

app.listen(port, () => {
    console.log('App Listening on port 3000');
});
