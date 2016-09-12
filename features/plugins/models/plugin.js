"use strict";
const mongoose = require('mongoose');
exports.TodoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=plugin.js.map