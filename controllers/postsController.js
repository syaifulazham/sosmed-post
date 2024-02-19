const db = require('../config/database');

exports.displayCreateForm = (req, res) => {
  res.render('createPost');
};

exports.createPost = (req, res) => {
  // Logic to insert post into database
  const { title, content, image_urls, video_urls } = req.body;
  const query = "INSERT INTO sosmed_posts (title, content, image_urls, video_urls, status) VALUES (?, ?, ?, ?, 'draft')";
  
  db.query(query, [title, content, image_urls, video_urls], (error, results) => {
    if (error) throw error;
    res.redirect('/posts');
  });
};

exports.listPosts = (req, res) => {
  const query = "SELECT * FROM sosmed_posts";
  db.query(query, (error, results) => {
    console.log(error, results)
    if (error) throw error;
    res.render('listPosts', { posts: results });
  });
};

exports.displayEditForm = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM sosmed_posts WHERE id = ?";
  
  db.query(query, [id], (error, results) => {
    if (error) throw error;
    
    // If no post found, redirect to posts list or show an error message
    if (results.length === 0) {
      return res.status(404).send('Post not found.');
    }
    
    const post = results[0];
    res.render('editPost', { post });
  });
};

exports.updatePost = (req, res) => {
  const id = req.params.id;
  const { title, content, image_urls, video_urls } = req.body;
  const query = "UPDATE sosmed_posts SET title = ?, content = ?, image_urls = ?, video_urls = ? WHERE id = ?";
  
  db.query(query, [title, content, image_urls, video_urls, id], (error, results) => {
    if (error) throw error;
    
    res.redirect('/posts');
  });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM sosmed_posts WHERE id = ?";
  
  db.query(query, [id], (error, results) => {
    if (error) throw error;
    
    res.redirect('/posts');
  });
};
