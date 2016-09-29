import * as mongoose from 'mongoose';

var PluginSchema = new mongoose.Schema({
  name: String,
  package: String,
  author: String,
  github: String,
  android: Boolean,
  ios: Boolean,
  downloads: Number
});

export var plugin = mongoose.model('Plugin', PluginSchema);