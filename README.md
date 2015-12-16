# mongoose-selfreference

A plugin for [mongoose](https://github.com/Automattic/mongoose). It enables
the creation of initially self-referential attributes. Combining this plugin 
with populate is not recommended.

## Usage

```js
someSchema.plugin(selfRefPlugin, options);
```

### Options

An object with one required property, `keys`, an array of
strings. Each string is the name of an attribute you want
set as a self-reference when it is `undefined`.

### Example
```js
someSchema.plugin(selfRefPlugin, {
    keys : ['attrOne', 'attrTwo', 'attrThree']
});
```

Where `someSchema` is an instance of `mongoose.Schema` and
attrOne, attrTwo, attrThree are the names of attributes on
the documents you want to be initially self-referential.

No changes to the `mongoose.Schema` constructor invocation
are necessary to use this module, provided the type of the
self-referential attributes is the same as the type of the
document's `_id` attribute (`mongoose.Schema.Types.ObjectId`
by default).
