'use strict';

var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;
var selfRefPlugin = require('../index');

var testSchema = new Schema({
    attr : {
        type : Schema.Types.ObjectId,
        ref : 'Test'
    }
});

testSchema.plugin(selfRefPlugin, {
    keys : ['attr']
});

mongoose.model('Test', testSchema);

module.exports = mongoose;
