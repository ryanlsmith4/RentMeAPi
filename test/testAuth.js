const chai = require('chai');
// const  User  = require('../models/landlords');
// const  app  = require('../server');
const { users, populateUsers } = require('./seed/seed');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
