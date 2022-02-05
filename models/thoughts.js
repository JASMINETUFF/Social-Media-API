const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

// Schema to create thoughts model
const thoughtsSchema = new Schema({
thoughtsText: {
      type: String,
      required: 'Sorry! Cant leave this empty. Give us your thoughts!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      // Returns the numeric value corresponding to the current time
      default: Date.now,
      // Plugged in Moments JS
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true      
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

thoughtsSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
});

const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;
