// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that listens for GET requests
app.get('/comments', (req, res) => {
  const comments = [
    { name: 'A', comment: 'Hi there!' },
    { name: 'B', comment: 'Hello!' },
    { name: 'C', comment: 'Hey!' }
  ];
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});