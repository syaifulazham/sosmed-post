const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);


// Routes placeholder
// TODO: Define routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
