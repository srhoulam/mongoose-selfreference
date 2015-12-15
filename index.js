'use strict';

module.exports = function pluginSelfReference(schema, options) {
    // ensure `options` and `options.keys` are supplied
    if(!options || !(options.keys instanceof Array)) {
        var err = new Error("mongoose-self-reference: insufficient configuration");
        throw err;
    }

    schema.pre('save', function(next) {
        var self = this;

        // iterate, setting self-references where they are absent
        options.keys.forEach(function(k) {
            if(!self[k]) {
                self[k] = self._id;
            }
        });

        next();
    });
};
