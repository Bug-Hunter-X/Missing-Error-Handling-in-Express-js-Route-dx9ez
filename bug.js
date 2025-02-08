const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  // Missing error handling for cases where req.params.id is not a valid number or user is not found
  const userId = parseInt(req.params.id, 10);
  // ...rest of the code
});