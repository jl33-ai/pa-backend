const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/', async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

// get single question by Id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/', async (req, res) => {
    const question = new Question(req.body);
    await question.save();
    res.json(question);
});

router.post('/:id/answer', async (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    console.log(id, answer);
    const question = await Question.findById(id);
    if (answer === 'yes') question.answers.yes++;
    else if (answer === 'no') question.answers.no++;
    await question.save();
    res.json(question);
});

module.exports = router;
