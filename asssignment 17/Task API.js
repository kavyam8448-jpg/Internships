const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory task storage
let tasks = [
  { id: 1, title: "Learn Node.js", description: "Study basics", status: "pending" },
  { id: 2, title: "Build API", description: "Create CRUD APIs", status: "completed" }
];

// ----------- ROUTES -----------

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Get single task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// Create new task
app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description: description || "",
    status: status || "pending"
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, description, status } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully" });
});

// ----------- SERVER -----------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});