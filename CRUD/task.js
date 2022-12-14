const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  task_name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
});

module.exports.Task = mongoose.model("Task", taskSchema);
