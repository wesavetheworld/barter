var messageSchema = require('./message').messageSchema,
mongoose = require('mongoose');

var conversationSchema = new mongoose.Schema({
  'requestingUser': { 'fbId': Number, 'name': String },
  'accepted': { 'type': Boolean, 'default': null },
  'createdAt': { 'type': Date, 'default': Date.now },
  'messages': [messageSchema]
});
var Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = {
  Conversation: Conversation,
  conversationSchema: conversationSchema
};
