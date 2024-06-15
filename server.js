const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/poll-anything', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

// Start the server
const port = 0429;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
