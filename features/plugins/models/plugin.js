"use strict";
const mongoose = require('mongoose');
exports.PluginSchema = new mongoose.Schema({
    name: String,
    package: String,
    author: String,
    github: String,
    android: Boolean,
    ios: Boolean
});
//# sourceMappingURL=plugin.js.map