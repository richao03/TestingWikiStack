var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);

var DatabaseEditor = require('../models');
var Page = require('../models').Page
var User = DatabaseEditor.User;

describe( 'Page Model', function () {
  var page;
  beforeEach(function(){
    page = Page.build({
      title: 'here is a title',
      content: 'here lies the content',
      urlTitle: 'thisURL'
    });
  })

  describe('Errors on fields', function (){

    xit('Returns an error if no title', function () {
      // Page.build();
      // expect(Page.create({}).then(function(){})).to.throw(new Error());
    });

    xit('Returns an error if no urlTitle', function () {

    });

    xit('Returns an error if no content', function () {

    });
  });

  describe('Virtual methods', function(){
    describe('Route', function(){
      it('returns /wiki/ + urlTitle', function (){
        expect(page.route).to.equal('/wiki/' + page.urlTitle)
      });
    });
    describe('Class Methods: findByTag', function (){
      it('returns all entries containing tag', function (){
        expect(page.findByTag).to.be.instanceOf(Promise)
      });
    });
    describe('instance method: findSimilar', function (){
      xit('returns all pages with similar ID or Tag', function (){

      });
    });
  });

});
