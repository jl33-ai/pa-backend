const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    answers: {
        yes: { type: Number, default: 0 },
        no: { type: Number, default: 0 }
    }
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);
