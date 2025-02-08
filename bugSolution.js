const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... logic to fetch user from database ...
  const user = getUser(userId); // Replace with your database fetching logic
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// Sample getUser function (replace with actual database interaction)
function getUser(id) {
  const users = {
    1: { id: 1, name: 'John Doe' },
    2: { id: 2, name: 'Jane Smith' },
  };
  return users[id];
}