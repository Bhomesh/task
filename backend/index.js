const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Choose a port for your backend server

// Middleware
app.use(cors());
app.use(express.json());

// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});