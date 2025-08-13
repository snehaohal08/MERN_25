const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json()); // Middleware to parse JSON

// Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Dummy user
const user = {
  username: 'sneha',
  password: 'sneha123'
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  // Check credentials
  if (username === user.username && password === user.password) {

    return res.json({ message: 'Login successful!' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});