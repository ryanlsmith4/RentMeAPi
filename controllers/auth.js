const User = require('../models/landlords');
const jwt = require('jsonwebtoken');
const router = require('express').Router();


// LOGIN
router.post('/login', (req, res) => {
    // Logs users in to website
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({
        username
    }, 'username password')
        .then((user) => {
            console.log(user);
            if (!user) {
                // User not found
                return res.status(401).send({
                    message: 'Wrong Username or Password'
                });
            }
            // Check the password
            user.comparePassword(password, (err, isMatch) => {
                console.log(isMatch);
                if (!isMatch) {
                    // console.log(isMatch);
                    // Password does not match
                    return res.status(401).send({
                        message: 'Wrong Username or password'
                    });
                }
                // Create a token
                const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                }, process.env.SECRET, {
                    expiresIn: '60 days'
                });
                // Set a cookie and redirect to root
                res.status(200).cookie('nToken', token, {
                    maxAge: 900000,
                    httpOnly: true
                });
                res.send("User succesfully authenticated cookie is:  " + token);;
            });
        })
        .catch(err => {
            console.log(err);
        });
});

// LOGOUT
router.get('/logout', (req, res) => {
    // Well ^
    console.log('ntoken');
    res.clearCookie('nToken');
    res.redirect('/');
});

// SIGN UP POST
router.post('/sign-up', (req, res) => {
    //  signs users up for the website
    // Create User and JWT
    const user = new User(req.body);

    user.save().then((user) => {
        var token = jwt.sign({
            _id: user._id
        }, process.env.SECRET, {
            expiresIn: '60 days'
        });
        res.cookie('nToken', token, {
            maxAge: 900000,
            httpOnly: true
        });
        res.send("User succesfully add to DB cookie is:  " + token);
    }).catch((err) => {
        console.log(err.message);
        console.log('Nope')
        return res.status(400).send({
            err: err, 
        });
    });
});

module.exports = router;
