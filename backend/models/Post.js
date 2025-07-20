const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    content: { type: String, required: true }, // rich text content
    coverImage: { type: String },
    author: { type: String, default: 'Admin' },
    likes: { type: [String], default: [] }, // user identifiers
    comments: [
      {
        name: String,
        message: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
