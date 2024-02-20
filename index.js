const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())


// Routes placeholder
// TODO: Define routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
