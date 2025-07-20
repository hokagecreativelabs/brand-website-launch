const Post = require('../models/Post');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error('Get all posts error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single post
exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    console.error('Get single post error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new post
exports.createPost = asyncHandler(async (req, res) => {
  const { title, content, slug, coverImage } = req.body;

  const postExists = await Post.findOne({ slug });
  if (postExists) {
    return res.status(400).json({ message: 'Post with this slug already exists' });
  }

  const newPost = new Post({
    title,
    content,
    slug: slugify(slug || title, { lower: true }),
    coverImage,
    author: req.admin._id,
  });

  const savedPost = await newPost.save();
  res.status(201).json(savedPost);
});

// Update existing post
exports.updatePost = async (req, res) => {
  try {
    const { title, content, coverImage } = req.body;
    const slug = slugify(title, { lower: true });

    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { title, slug, content, coverImage },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(updated);
  } catch (err) {
    console.error('Update post error:', err);
    res.status(500).json({ message: 'Error updating post' });
  }
};

// Delete a post - IMPROVED VERSION
exports.deletePost = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if ID is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid post ID format' 
      });
    }

    // Find the post first to check if it exists and get post info
    const post = await Post.findById(id);
    
    if (!post) {
      return res.status(404).json({ 
        success: false,
        message: 'Post not found' 
      });
    }

    // Optional: Check if the admin is the author (if you want ownership control)
    // if (post.author.toString() !== req.admin._id.toString()) {
    //   return res.status(403).json({ 
    //     success: false,
    //     message: 'Not authorized to delete this post' 
    //   });
    // }

    // Delete the post
    await Post.findByIdAndDelete(id);

    res.status(200).json({ 
      success: true,
      message: 'Post deleted successfully',
      deletedPost: {
        id: post._id,
        title: post.title,
        slug: post.slug
      }
    });

  } catch (err) {
    console.error('Delete post error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Error deleting post',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Enhanced delete with transaction support (if you need it)
exports.deletePostWithTransaction = asyncHandler(async (req, res) => {
  const mongoose = require('mongoose');
  const session = await mongoose.startSession();
  
  try {
    session.startTransaction();
    
    const { id } = req.params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      await session.abortTransaction();
      return res.status(400).json({ 
        success: false,
        message: 'Invalid post ID' 
      });
    }

    // Find and delete the post
    const deletedPost = await Post.findByIdAndDelete(id).session(session);
    
    if (!deletedPost) {
      await session.abortTransaction();
      return res.status(404).json({ 
        success: false,
        message: 'Post not found' 
      });
    }

    // Optional: Delete related data or update counters
    // await Comment.deleteMany({ postId: id }).session(session);
    // await Like.deleteMany({ postId: id }).session(session);

    await session.commitTransaction();
    
    res.status(200).json({ 
      success: true,
      message: 'Post deleted successfully',
      deletedPost: {
        id: deletedPost._id,
        title: deletedPost.title,
        slug: deletedPost.slug
      }
    });

  } catch (err) {
    await session.abortTransaction();
    console.error('Enhanced delete error:', err);
    res.status(500).json({ 
      success: false,
      message: 'Error deleting post',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  } finally {
    session.endSession();
  }
});

// Add a comment
exports.addComment = async (req, res) => {
  try {
    const { name, message } = req.body;

    // Validate input
    if (!name || !message) {
      return res.status(400).json({ message: 'Name and message are required' });
    }

    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.comments.push({ 
      name: name.trim(), 
      message: message.trim(),
      createdAt: new Date()
    });
    
    await post.save();

    res.json({
      success: true,
      message: 'Comment added successfully',
      post
    });
  } catch (err) {
    console.error('Add comment error:', err);
    res.status(500).json({ message: 'Error adding comment' });
  }
};

// Like a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const userId = req.user._id;
    
    // Toggle like - remove if already liked, add if not liked
    const likedIndex = post.likes.indexOf(userId);
    if (likedIndex > -1) {
      post.likes.splice(likedIndex, 1); // Unlike
    } else {
      post.likes.push(userId); // Like
    }

    await post.save();
    
    res.json({ 
      success: true,
      likes: post.likes,
      likesCount: post.likes.length,
      isLiked: post.likes.includes(userId)
    });
  } catch (err) {
    console.error('Like post error:', err);
    res.status(500).json({ message: 'Error liking post' });
  }
};