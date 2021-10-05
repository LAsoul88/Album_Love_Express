const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    albumId: {
      type: String,
      required: true
    },
    publishDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;