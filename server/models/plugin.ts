import * as mongoose from 'mongoose';

declare var String;
declare var Boolean;
declare var Number;

var PluginSchema = new mongoose.Schema({
  name: String,
  package_name: String,
  author: String,
  github: String,
  android: Boolean,
  ios: Boolean,
  downloads: Number,
  description: String,
  version: String
});

export var plugin = mongoose.model('Plugin', PluginSchema);