const chai = require('chai');
const express = require('express');
const app = express();
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const user = {
  email: 'example@email.com',
  password: 'thisgreatpassword',
  id: "5cdf205fe710570812e85d62"
}

it('should login user and return and a cookie', (done) => {
    chai.request(app)
      .post('/users/login')
      .send({
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        expect(res).to.have.status(200);
        User.findById(user.id).then((user) => {
          expect(res.token).to.exist;
        }).catch(err => done(err));
        return done();
      })
      .catch(err => done(err));
  });


  // it('should not create user if email in use', (done) => {
  //   chai.request(app)
  //     .post('/users/signup')
  //     .send({
  //       fullname: user.email,
  //       email: user.password,
  //       password: users[0].password
  //     })
  //     .then((res) => {
  //       expect(res).to.have.status(400);
  //       return done();
  //     })
  //     .catch(err => done(err));
  // });