const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  content: {
    type: String, required: true
  },
  resolved: {
    type: Boolean, required: true
  }
})

module.exports = mongoose.model('task', taskSchema);