# RentMeAPI
## ABOUT

This API allows users to sign up to Host Rental Listings

Makes it easy for people to connect and find tenants

As this is a work in progress it still lacks valuable features such as searching for listings

Currently all the listings are in one place and that is the '/' route

This API currently can C.R.U.D listings and allows you to sign up for the app.

# Routes
POST: Create new user requires a username and a password in the header
>/user/sign-up

POST: Login as a user requires a username and a password in the header
>/user/login

GET: Logout clears the cookie nToken
>/user/logout

POST: new rental listing requires a neighborhood, zip code(int), type (room, apt etc) and price(int)
>/listing/rentals/view/new

GET: Get a list of all listings
>/listing/rentals/

GET: Gets a rental by the ID requires knowledge of the rental ID
>/listing/rentals/:id

DELETE: deletes an entry by ID

>/listing/rentals/delete/:id

PUT: Updates a listing by ID
>/listing/rentals/view/:id


# Getting Started
To get started install the dependencies in a new project folder.
Since there is no front end on this API besides the docsify brochure you will either need to have knowledge of postman or go to the actual webpage on heroku to see the skinned project

Github Pages link<br>
https://ryanlsmith4.github.io/RentMeAPi/#/


Heroku link to website<br>
https://rentmenow.herokuapp.com/

## Dependencies
I have used node and npm for all the dependencies
To install these in your project folder type
```npm i <package> --save```

    "bcrypt": "^3.0.2",
    "bootstrap": "^4.1.3",
    "chai": "^4.2.0",
    "chai-http": "^4.2.0",
    "cookie-parser": "^1.4.3",
    "dotenv": "^6.2.0",
    "express": "^4.16.4",
    "express-handlebars": "^3.0.0",
    "jquery": "^3.0.0",
    "jsonwebtoken": "^8.3.0",
    "method-override": "^3.0.0",
    "mongoose": "^5.3.4",
    "popper.js": "^1.14.4"

# TODO:
1. add rating and payment system <br>
2. incorporate search function <br>
3. associate Landlord with rentals <br>
4. add chat feature <br>
5. add lease upload system <br>
6. incorporate trending properties(properties that have been looked at multiple times)
7. Add a filter to the search results

# Contact
if you have question or comments or want to contribut the github link in the top right corner will take you to the repo!
