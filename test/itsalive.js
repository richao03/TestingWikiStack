var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);


describe("simple confirmation", function() {
    it("add stuff", function() {
        expect(2 + 2).to.eql(4)
    });
});

// describe("set time out", function (){
//   it("sets timeout", function(done){
//     var start = new Date();
//     setTimeout(function(){
//       var duration = new Date - start
//       expect(duration).to.be.closeTo(1000,50)
//       console.log(duration);
//        done();
//     }, 1000);
//   });
// });

describe("calling forEach", function() {
    beforeEach(function() {
        var arr = [1, 2, 3];
        function doit(num) {
            return num * 2
        }
    });
    it("runs 3 time", function() {
            doit = chai.spy(doit)
            arr.forEach(doit)
                // expect(arr).to.eql([2,4,6]);
            expect(doit).to.have.been.called.exactly(3);
        }),

        it("preforms function on each element", function() {
             expect(arr).to.eql([2,4,6]);
        })


})
