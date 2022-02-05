const { Schema, model } = require('mongoose');

// Schema to create thoughts model
const thoughtsSchema = new Schema({
thoughtsText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      // Returns the numeric value corresponding to the current time
      default: Date.now,
      // Plugged in Moments JS
      get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')]
    },
    thoughts: {
      
    },
    friends: {
  },
}
);

const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;
