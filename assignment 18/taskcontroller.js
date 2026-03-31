const taskModel = require("../models/taskModel");

// Get all tasks
exports.getTasks = (req, res) => {
  res.json(taskModel.getAllTasks());
};

// Get task by ID
exports.getTask = (req, res) => {
  const task = taskModel.getTaskById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

// Create task
exports.createTask = (req, res) => {
  const { title, description, status } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = taskModel.addTask({
    title,
    description: description || "",
    status: status || "pending"
  });

  res.status(201).json(newTask);
};

// Update task
exports.updateTask = (req, res) => {
  const updatedTask = taskModel.updateTask(req.params.id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(updatedTask);
};

// Delete task
exports.deleteTask = (req, res) => {
  const success = taskModel.deleteTask(req.params.id);

  if (!success) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted successfully" });
};