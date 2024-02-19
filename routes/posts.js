const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

console.log('------------------------>',postsController.displayCreateForm);
// Route to display the form for a new post
router.get('/create', postsController.displayCreateForm);

// Route to submit a new post
router.post('/create', postsController.createPost);

// Route to list all posts
router.get('/', postsController.listPosts);

// Route to display the edit form
router.get('/edit/:id', postsController.displayEditForm);

// Route to update a post
router.post('/update/:id', postsController.updatePost);

// Route to delete a post
router.get('/delete/:id', postsController.deletePost);

module.exports = router;
