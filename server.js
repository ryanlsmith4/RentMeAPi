require('dotenv').config()
const Rental = require('./models/rental');
const User = require('./models/landlords')
const methodOverride = require('method-override');
var cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
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

const rental = require('./controllers/routes')(app, Rental);
// const users = require('./controllers/auth')(app, User);


app.listen(port, () => {
    console.log('App Listening on port 3000');
});
