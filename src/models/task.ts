const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  dueDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  assignee: {
    type: String,
    required: true
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;