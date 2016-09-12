import * as mongoose from 'mongoose';

export var PluginSchema = new mongoose.Schema({
  name: String,
  package: String,
  author: String,
  github: String,
  android: Boolean,
  ios: Boolean
});

