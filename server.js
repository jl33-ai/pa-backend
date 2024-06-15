const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();


// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

// Start the server
const port = process.env.PORT || 2904;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
