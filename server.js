const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://justin00man:AIWr2mnFhPYkKB8I@cluster0.l2bhg9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

// Start the server
const port = 4029;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
