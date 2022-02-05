const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      // Used REGEX to validate the email
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }
  ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  ]
},
{
  toJSON: {
    virtuals: true,
  },
  id: false
}
)
// retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

// create the Users model using the Users Schema
const User = model('user', userSchema);

// Export Users module
module.exports = User;
