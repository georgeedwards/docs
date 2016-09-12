"use strict";
const mongoose = require('mongoose');
var PluginSchema = new mongoose.Schema({
    name: String,
    package: String,
    author: String,
    github: String,
    android: Boolean,
    ios: Boolean
});
// Create a model based on the schema
module.exports = mongoose.model('Plugin', PluginSchema);
//# sourceMappingURL=plugin.js.map