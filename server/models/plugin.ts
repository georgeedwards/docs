import * as mongoose from 'mongoose';

var PluginSchema = new mongoose.Schema({
  name: String,
  package: String,
  author: String,
  github: String,
  android: Boolean,
  ios: Boolean
});
// Create a model based on the schema
//module.exports = mongoose.model('Plugin', PluginSchema);

export var plugin = mongoose.model('Plugin', PluginSchema);