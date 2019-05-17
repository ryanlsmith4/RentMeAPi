const chai = require('chai');
// const  User  = require('../models/landlords');
// const  app  = require('../server');
const { users, populateUsers } = require('./seed/seed');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const user = {
  email: 'example@email.com',
  password: 'thisgreatpassword',
}

it('should login user and return a auth token', (done) => {
    chai.request(app)
      .post('/users/login')
      .send({
        email: user.email,
        password: user.password
      })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.headers['x-auth']).to.exist;
        User.findById(users[1]._id).then((user) => {
          expect(user.tokens[0]).to.include({
            access: 'auth',
            token: res.header['x-auth']
          });
        }).catch(err => done(err));
        return done();
      })
      .catch(err => done(err));
  });


  it('should not create user if email in use', (done) => {
    chai.request(app)
      .post('/users/signup')
      .send({
        fullname: users[0].firstname,
        email: users[0].email,
        password: users[0].password
      })
      .then((res) => {
        expect(res).to.have.status(400);
        return done();
      })
      .catch(err => done(err));
  });