const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/', async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

router.post('/', async (req, res) => {
    const question = new Question(req.body);
    await question.save();
    res.json(question);
});

router.post('/:id/answer', async (req, res) => {
    const { id } = req.params;
    const { answer } = req.body;
    const question = await Question.findById(id);
    if (answer === 'yes') question.answers.yes++;
    else if (answer === 'no') question.answers.no++;
    await question.save();
    res.json(question);
});

module.exports = router;
