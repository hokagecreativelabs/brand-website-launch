const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  addComment,
  likePost,
} = require('../controllers/postController');
const protect = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

// ✅ Image upload should be defined FIRST before `:slug` or `:id`
router.post('/upload', protect, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No image uploaded' });
  }
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.status(200).json({ url: imageUrl });
});

// CRUD routes
router.get('/', getAllPosts);
router.get('/:slug', getSinglePost);
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);

// Like & Comment
router.patch('/:id/like', protect, likePost);
router.post('/:slug/comments', addComment);

module.exports = router;
