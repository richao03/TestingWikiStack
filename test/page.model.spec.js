var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var Sequelize = require('sequelize');
var marked = require('marked');

// var db = new Sequelize('postgres://localhost:5432/wikistackTest', {
//     logging: false
// });

var DatabaseEditor = require('../models');
var Page = require('../models').Page
var User = DatabaseEditor.User;
var page
describe('Page Model', function() {
    beforeEach(function() {
        page = Page.build({
                title: "THIS IS TITLE!",
                content: "HERE IS CONTENT!",
                tags: ["one tag", "two tags", "three"]
            })
            // .then (function (){

        // })
        // .catch(done)
    })


    describe('Testing Properties', function() {

        it('Returns no error if title is present', function() {
            expect(page.title).to.equal("THIS IS TITLE!")
        });

        // xit('Returns no error if urlTitle is present', function () {

        // });

        it('Returns no error if content is present', function() {
            expect(page.content).to.equal("HERE IS CONTENT!")
        });
    });

    describe('Virtual methods', function() {
        describe('Route', function() {
            it('returns /wiki/ + urlTitle', function() {
                page.urlTitle = "something"
                expect(page.route).to.equal('/wiki/' + page.urlTitle)
            });
        });
        describe('Class Methods: findByTag', function() {
            it('returns all entries containing tag', function(done) {

                Page.findByTag('two tags').then(function(pages) {
                  console.log(pages.dataValues)
                    expect(pages.dataValues).to.have.lengthOf(1)
                    done();
                });

            });
        });
        describe('instance method: findSimilar', function() {
            xit('returns all pages with similar ID or Tag', function() {

            });
        });
    });

});
