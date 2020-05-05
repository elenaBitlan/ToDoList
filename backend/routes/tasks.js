const express = require('express');

const Task = require('../models/task.js');
const router = express.Router();

router.get('', (req, res, next) => {
  Task.find().then((documents) => {
    res.status(200).json({
      message: 'succes',
      tasks: documents,
    });
  });
});

router.post('', (req, res, next) => {
  const task = new Task({
    content: req.body.content,
    resolved: false,
  });
  return task.save().then((createdTask) => {
    res.status(201).json({
      message: 'task added',
      task: task,
    });
  });
});

router.delete('/:_id', (req, res, next) => {
  Task.deleteOne({ _id: req.params._id }).then(() => {
    res.status(200).json({ message: 'task deleted' });
  });
});

router.put('/:_id', (req, res, next) => {
  const { content, resolved } = req.body;
  Task.updateOne({ _id: req.params._id }, { content, resolved }).then(
    (result) => {
      res.status(200).json({ message: 'update succesfull' });
    }
  );
});

module.exports = router;