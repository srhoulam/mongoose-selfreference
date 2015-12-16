'use strict';

var mongoose = require('./model');
var Model = mongoose.model('Test');

mongoose.connect('mongodb://localhost/plugin-test');

describe("self-reference plugin", function() {
    var doc;

    beforeAll(function(done) {
        // use correct callback syntax
        Model.create({}, function(err, d) {
            if(err) {
                fail(err);
            } else {
                doc = d;
            }

            done();
        });
    });

    it("sets self-referential attributes to the document's ID", function() {
        expect(doc === undefined).toBe(false);
        expect(doc.attr === undefined).toBe(false);
        expect(doc.attr === doc._id).toBe(true);
    });
});
