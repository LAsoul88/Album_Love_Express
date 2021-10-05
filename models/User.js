const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username required'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'password required']
    },
    recordCollection: [{
      type: [String],
      default: []
    }],
    avatar: {
      type: String,
      default: 'https://st.depositphotos.com/1014680/1884/i/600/depositphotos_18840485-stock-photo-vinyl-record.jpg'
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;