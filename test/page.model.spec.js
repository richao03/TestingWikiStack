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
xdescribe('Page Model', function() {
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
            var page2;
            beforeEach(function() {
                page2 = Page.build({
                    title: 'TitlE2',
                    content: 'Content right here',
                    tags: ["one tag"]
                })
            })
            it('returns all entries containing one tag', function(done) {

                Page.findByTag('one tag').then(function(pages) {
                    expect(pages).to.have.lengthOf(2);
                    done();
                });
            });

            it('returns all entries containing one tag', function(done) {
                Page.findByTag('two tags').then(function(pages) {
                    expect(pages).to.have.lengthOf(1);
                    done();
                });
            });

            it('returns all pages with similar ID or Tag', function(done) {
                page2.id = 3
                page2.findSimilar().then(function(pages) {
                    expect(pages).to.have.lengthOf(1);
                    done();
                })
            });
        });
    });

    describe("Validation tests", function() {
        var page3
        // var page4
        beforeEach(function() {
            // page4 = Page.build({
            //     title: "another title",
            //     // urlTitle:"/wiki/another_title",
            //     content: "some extra content"
            // })

            page3 = Page.build({})
        })
        it("Validates title", function(done) {
            page3.validate()
                .then(function(validation) {
                    expect(validation.errors[0].message).to.equal("title cannot be null")
                        // console.log(validation)
                    done();
                })

        })

        it("Validates urlTitle", function(done) {
            page3.validate()
                .then(function(validation) {
                    expect(validation.errors[1].message).to.equal("urlTitle cannot be null")
                        // console.log(validation)
                    done();
                })

        })

        it("Validates content", function(done) {
            page3.validate()
                .then(function(validation) {
                    expect(validation.errors[2].message).to.equal("content cannot be null")
                        // console.log(validation)
                    done();
                })

        })

        // it("Validates everything", function(done) {
        //     var page4 = Page.build({
        //         title: "another title",
        //         // urlTitle:"/wiki/another_title",
        //         content: "some extra content"
        //     })
        //     return page4.validate()
        //         .then(function(validation) {
        //             console.log(validation)
        //             expect(validation).to.equal(null)
        //                 // console.log(validation)
        //             done();
        //         }).catch(done)

        // })

    })





});
