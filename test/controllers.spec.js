var supertest = require('supertest');
var app = require('../app');

//routers
var agent = supertest.agent(app);
var users = require('../routes/users');
var wiki = require('../routes/wiki');


var DatabaseEditor = require('../models');
var Page = require('../models').Page
var User = DatabaseEditor.User;

//testing
var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var Sequelize = require('sequelize');
var marked = require('marked');

describe('Routers', function () {
  beforeEach(function (){
      User.create({
        name: 'James Bond',
        email: '007@spyassoc.gov'
      }).then(function (){
      }).catch(function(err){console.error(err)});
    });

  afterEach(function (){
    User.destroy({where:{}});
  })

  describe('users Routers',function (){
    // var user;
    // beforeEach(function (){
    //   User.create({
    //     name: 'James Bond',
    //     email: '007@spyassoc.gov'
    //   }).then(function (){
    //   }).catch(function(err){console.error(err)});
    // });

    // afterEach(function (){
    //   User.destroy({where:{}});
    // })

    xit('GET responds with correct list of users', function(done){
        return agent
        .get('/users')
        .expect(200, done)
    });

    it('GET responds with correct list of users', function(done){
        User.findOne({
          where: {
            name: 'James Bond'
          }
        }).then(function(user){
          console.log(user, user.id)
          var identification = user.id;
          return agent
          .get('/users/' + identification)
          .expect(200, done);
        })
    })
  })
})
