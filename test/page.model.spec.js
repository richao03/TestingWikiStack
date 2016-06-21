var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var Sequelize = require('sequelize');
var marked = require('marked');

var db = new Sequelize('postgres://localhost:5432/wikistackTest', {
    logging: false
});

var DatabaseEditor = require('../models');
var Page = require('../models').Page
var User = DatabaseEditor.User;

describe( 'Page Model', function () {
  var page;
  beforeEach(function(){
    page = Page.build({
      content: "content"
     });
  })

  describe('Errors on fields', function (){

    it('Returns an error if no title', function (done) {

    });

    xit('Returns an error if no urlTitle', function (done) {

    });

    xit('Returns an error if no content', function (done) {

    });
  });

  describe('Virtual methods', function(){
    describe('Route', function(){
      xit('returns /wiki/ + urlTitle', function (){
        expect(page.route).to.equal('/wiki/' + page.urlTitle)
      });
    });
    describe('Class Methods: findByTag', function (){
      xit('returns all entries containing tag', function (done){

        Page.findByTag('string').then(function(pages){
          expect(pages).to.have.lengthOf(0)
          done();
        });

      });
    });
    describe('instance method: findSimilar', function (){
      xit('returns all pages with similar ID or Tag', function (){

      });
    });
  });

});
